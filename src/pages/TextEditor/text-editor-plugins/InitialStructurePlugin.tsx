import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode } from '@lexical/rich-text';
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

      const hasHeading = children.some(
        (child) => child.getType() === 'heading'
      );

      if (!hasContent && !hasHeading) {
        const heading = $createHeadingNode('h1');
        heading.append($createTextNode('Без названия'));

        const paragraph = $createParagraphNode();
        paragraph.append($createTextNode('Начните писать здесь...'));

        root.append(heading, paragraph);
      } else if (!hasHeading) {
        const heading = $createHeadingNode('h1');
        heading.append($createTextNode('Мой заголовок'));
        root.insertBefore(heading);
      }
    });
  }, [editor]);

  return null;
}

export default InitialStructurePlugin;
