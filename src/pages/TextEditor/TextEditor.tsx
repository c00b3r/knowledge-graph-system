import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isTextNode,
  COMMAND_PRIORITY_CRITICAL,
  KEY_ENTER_COMMAND,
} from 'lexical';
import { useEffect } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, $createHeadingNode } from '@lexical/rich-text';
import './style.css';

const theme = {
  heading: {
    h1: 'editor-heading-h1',
  },
};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  nodes: [HeadingNode],
  onError: (error: Error) => console.error(error),
};

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

function HandleEnterInHeadingPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeKeyDownListener = editor.registerCommand<KeyboardEvent | null>(
      KEY_ENTER_COMMAND,
      (event) => {
        event?.preventDefault();

        const selection = $getSelection();
        console.log('Selection:', selection);

        if (!selection) return false;

        editor.update(() => {
          const newParagraph = $createParagraphNode();
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

function TextEditor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <InitialStructurePlugin />
      <HandleEnterInHeadingPlugin />
      <PlainTextPlugin
        contentEditable={
          <ContentEditable className='text-editor-content-editable' />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={(editorState) => console.log(editorState)} />
    </LexicalComposer>
  );
}

export default TextEditor;

// import './style.css';
// import Image from '@tiptap/extension-image';
// import { Table } from '@tiptap/extension-table';
// import { TableCell } from '@tiptap/extension-table-cell';
// import { TableHeader } from '@tiptap/extension-table-header';
// import { TableRow } from '@tiptap/extension-table-row';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { Space, Tooltip, Button } from 'antd';
// import { useCallback, useRef } from 'react';
// import {
//   TableOutlined,
//   InsertRowAboveOutlined,
//   InsertRowRightOutlined,
//   CodeOutlined,
// } from '@ant-design/icons';
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
// import { createLowlight } from 'lowlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import css from 'highlight.js/lib/languages/css';
// import html from 'highlight.js/lib/languages/xml';

// const lowlight = createLowlight();

// lowlight.register('html', html);
// lowlight.register('css', css);
// lowlight.register('javascript', javascript);

// function TextEditor() {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Image.configure({
//         inline: true,
//         allowBase64: true,
//       }),
//       Table.configure({ resizable: true }),
//       TableRow,
//       TableHeader,
//       TableCell,
//       CodeBlockLowlight.configure({
//         lowlight,
//         defaultLanguage: 'javascript  ',
//       }),
//     ],
//     editorProps: {
//       handleKeyDown: (_view, event) => {
//         if (event.ctrlKey && event.key === 'c') {
//           handlePasteImage();
//           return true;
//         }
//         return false;
//       },
//     },
//     content: '<p>Начните писать...</p>',
//   });

//   const handleInsertCodeBlock = () => {
//     if (editor?.isActive('codeBlock')) {
//       editor.chain().focus().toggleCodeBlock().run();
//     } else {
//       editor
//         ?.chain()
//         .focus()
//         .setCodeBlock({ language: 'plaintext' })
//         .insertContent('console.log("Hello world!");')
//         .run();
//     }
//   };

//   const handlePasteImage = useCallback(async () => {
//     const clipboardItems = await navigator.clipboard.read();

//     for (const clipboardItem of clipboardItems) {
//       for (const type of clipboardItem.types) {
//         if (type.startsWith('image/')) {
//           const blob = await clipboardItem.getType(type);

//           const reader = new FileReader();
//           reader.onload = () => {
//             const base64data = reader.result as string;

//             editor?.chain().focus().setImage({ src: base64data }).run();
//           };
//           reader.readAsDataURL(blob);
//           return;
//         }
//       }
//     }
//   }, [editor]);

//   const editorContainer = useRef<HTMLDivElement>(null);

//   const handleInsertTable = () => {
//     editor?.commands.insertTable({
//       rows: 3,
//       cols: 3,
//       withHeaderRow: true,
//     });
//   };

//   const handleAddRow = () => {
//     editor?.chain().focus().addRowAfter().run();
//   };

//   const handleAddColumn = () => {
//     editor?.chain().focus().addColumnAfter().run();
//   };

//   return (
//     <div className='editor'>
//       <Space wrap>
//         <Tooltip title='Добавить таблицу (3x3)'>
//           <Button
//             type='primary'
//             icon={<TableOutlined />}
//             onClick={handleInsertTable}
//           >
//             Таблица
//           </Button>
//         </Tooltip>

//         <Tooltip title='Добавить строку ниже'>
//           <Button icon={<InsertRowAboveOutlined />} onClick={handleAddRow}>
//             Строка
//           </Button>
//         </Tooltip>

//         <Tooltip title='Добавить столбец справа'>
//           <Button icon={<InsertRowRightOutlined />} onClick={handleAddColumn}>
//             Столбец
//           </Button>
//         </Tooltip>
//         <Tooltip title='Добавить блок кода'>
//           <Button
//             icon={<CodeOutlined />}
//             onClick={handleInsertCodeBlock}
//             type={editor?.isActive('codeBlock') ? 'primary' : 'default'}
//           >
//             Блок кода
//           </Button>
//         </Tooltip>
//       </Space>
//       <div className='editor-container' ref={editorContainer}>
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// }

// export default TextEditor;
