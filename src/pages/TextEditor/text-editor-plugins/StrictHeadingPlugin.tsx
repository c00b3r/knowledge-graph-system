import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode } from '@lexical/rich-text';
import {
  $getRoot,
  $isElementNode,
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  DELETE_CHARACTER_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  KEY_ENTER_COMMAND,
} from 'lexical';
import { useCallback, useEffect } from 'react';

function StrictHeadingPlugin() {
  const [editor] = useLexicalComposerContext();

  const hasValidHeading = useCallback(() => {
    let isValid = false;
    editor.getEditorState().read(() => {
      const root = $getRoot();
      const firstChild = root.getFirstChild();
      isValid =
        $isElementNode(firstChild) && firstChild.getType() === 'heading';
    });
    return isValid;
  }, [editor]);

  const enforceHeading = useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      const firstChild = root.getFirstChild();

      if (
        !($isElementNode(firstChild) || firstChild?.getType() !== 'heading')
      ) {
        const heading = $createHeadingNode('h1');
        heading.append($createTextNode(''));
        root.insertBefore(heading);

        if (firstChild) {
          root.append(firstChild);
        }
      }
    });
  }, [editor]);

  const preventHeadingDeletion = (event: KeyboardEvent | null) => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const focusNode = selection.focus.getNode();

      const isDeletingHeading =
        ($isElementNode(anchorNode) && anchorNode.getType() === 'heading') ||
        ($isElementNode(focusNode) && focusNode.getType() === 'heading');

      if (isDeletingHeading) {
        if (event?.type === 'keydown' && event.key === 'Enter') {
          const isEmpty = anchorNode.getTextContent().trim() === '';
          if (isEmpty) {
            event.preventDefault();
            return true;
          }
          return false;
        }
        event?.preventDefault();
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    if (!hasValidHeading()) {
      enforceHeading();
    }

    const removeUpdateListener = editor.registerUpdateListener(() => {
      if (!hasValidHeading()) {
        enforceHeading();
      }
    });

    const removeDeleteCommand = editor.registerCommand(
      DELETE_CHARACTER_COMMAND,
      preventHeadingDeletion,
      COMMAND_PRIORITY_CRITICAL
    );

    const removeEnterCommand = editor.registerCommand(
      KEY_ENTER_COMMAND,
      preventHeadingDeletion,
      COMMAND_PRIORITY_CRITICAL
    );

    return () => {
      removeUpdateListener();
      removeDeleteCommand();
      removeEnterCommand();
    };
  }, [editor, enforceHeading, hasValidHeading]);

  return null;
}

export default StrictHeadingPlugin;
