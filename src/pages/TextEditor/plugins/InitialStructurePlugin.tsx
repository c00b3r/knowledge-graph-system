import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  $createTextNode,
  $createParagraphNode,
} from 'lexical';
import { useEffect } from 'react';

function InitialStructurePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      const root = $getRoot();
      const children = root.getChildren();

      const hasContent =
        children.length > 0 &&
        children.some((child) => {
          if ($isElementNode(child)) {
            return child.getTextContent().trim().length > 0;
          }
          return $isTextNode(child) && child.getTextContent().trim().length > 0;
        });

      if (!hasContent) {
        const paragraph = $createParagraphNode();
        paragraph.append($createTextNode('Начните писать здесь...'));

        root.append(paragraph);
      }
    });
  }, [editor]);

  return null;
}

export default InitialStructurePlugin;
