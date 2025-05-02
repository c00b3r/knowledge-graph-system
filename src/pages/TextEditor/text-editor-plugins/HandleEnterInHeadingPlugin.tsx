import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  KEY_ENTER_COMMAND,
  $getSelection,
  $getRoot,
  $createParagraphNode,
  COMMAND_PRIORITY_CRITICAL,
  $isRangeSelection,
  $createTextNode,
} from 'lexical';
import { useEffect } from 'react';

function HandleEnterInHeadingPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeKeyDownListener = editor.registerCommand<KeyboardEvent | null>(
      KEY_ENTER_COMMAND,
      (event) => {
        const selection = $getSelection();

        if (!$isRangeSelection(selection)) {
          return false;
        }

        const root = $getRoot();
        const firstChild = root.getFirstChild();
        const anchorNode = selection.focus.getNode();
        console.log(anchorNode.getType());

        if (!selection) return false;

        editor.update(() => {
          if (
            firstChild?.getType() === 'heading' &&
            firstChild.getTextContent() === ''
          ) {
            event?.preventDefault();
            return true;
          }

          if (anchorNode.getParent()?.getType() === 'heading') {
            const newParagraph = $createParagraphNode();
            selection.insertNodes([newParagraph]);
            newParagraph.selectStart();
            return true;
          }

          const newParagraph = $createParagraphNode();
          newParagraph.append($createTextNode(''));
          selection.insertNodes([newParagraph]);
          newParagraph.selectStart();
        });

        return true;
      },
      COMMAND_PRIORITY_CRITICAL
    );

    return () => {
      removeKeyDownListener();
    };
  }, [editor]);

  return null;
}

export default HandleEnterInHeadingPlugin;
