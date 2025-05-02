import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  KEY_ENTER_COMMAND,
  $getSelection,
  $createParagraphNode,
  COMMAND_PRIORITY_CRITICAL,
  $isRangeSelection,
  KEY_BACKSPACE_COMMAND,
  $createTextNode,
  $isElementNode,
  $isTextNode,
} from 'lexical';
import { useEffect } from 'react';

function HandleEnterInHeadingPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeEnterListener = editor.registerCommand<KeyboardEvent | null>(
      KEY_ENTER_COMMAND,
      (event) => {
        const selection = $getSelection();

        if (!$isRangeSelection(selection)) {
          return false;
        }

        const anchorNode = selection.focus.getNode();
        const headingNode = anchorNode.getParent();

        if (!selection || !headingNode) return false;

        if (headingNode.getType() === 'heading') {
          const headingText = headingNode.getTextContent();
          const isAtEnd = selection.anchor.offset === headingText.length;

          if (headingText === '') {
            event?.preventDefault();
            return true;
          }

          if (!isAtEnd) {
            event?.preventDefault();
            return true;
          }

          editor.update(() => {
            const newParagraph = $createParagraphNode();
            selection.insertNodes([newParagraph]);
            newParagraph.selectStart();
          });

          return true;
        }

        editor.update(() => {
          const newParagraph = $createParagraphNode();
          newParagraph.append($createTextNode(''));
          selection.insertNodes([newParagraph]);
          newParagraph.selectStart();
        });

        return true;
      },
      COMMAND_PRIORITY_CRITICAL
    );

    const removeBackspaceListener = editor.registerCommand(
      KEY_BACKSPACE_COMMAND,
      (event) => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return false;

        const anchor = selection.anchor;
        const currentNode = anchor.getNode();

        const parentNode = $isTextNode(currentNode)
          ? currentNode.getParent()
          : currentNode;

        if (
          !$isElementNode(parentNode) ||
          parentNode.getType() !== 'paragraph'
        ) {
          return false;
        }

        const isAtStart =
          anchor.offset === 0 && currentNode === parentNode.getFirstChild();
        if (!isAtStart) {
          return false;
        }

        const previousNode = parentNode.getPreviousSibling();
        if (
          !$isElementNode(previousNode) ||
          previousNode.getType() !== 'heading'
        ) {
          return false;
        }

        event.preventDefault();
        return true;
      },
      COMMAND_PRIORITY_CRITICAL
    );

    return () => {
      removeEnterListener();
      removeBackspaceListener();
    };
  }, [editor]);

  return null;
}

export default HandleEnterInHeadingPlugin;
