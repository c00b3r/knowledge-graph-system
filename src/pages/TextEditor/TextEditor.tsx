import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode } from '@lexical/rich-text';
import InitialStructurePlugin from './text-editor-plugins/InitialStructurePlugin';
import './TextEditor.css';
import FloatingTextFormatToolbarPlugin from './text-editor-plugins/FloatingTextFormater/FloatingTextFormater';
import { useState } from 'react';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { EditorThemeClasses } from 'lexical';
import HeadingInput from './ui/HeadingInput';

const theme: EditorThemeClasses = {
  heading: {
    h1: 'editor-heading-h1',
  },
  paragraph: 'editor-paragraph',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    underline: 'editor-text-underline',
    strikethrough: 'editor-text-strikethrough',
    subscript: 'editor-text-subscript',
    superscript: 'editor-text-superscript',
    code: 'editor-text-code',
    uppercase: 'editor-text-uppercase',
    lowercase: 'editor-text-lowercase',
    capitalize: 'editor-text-capitalize',
  },
};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  nodes: [HeadingNode],
  onError: (error: Error) => console.error(error),
  editorState: null,
  formatters: [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'subscript',
    'superscript',
    'code',
    'uppercase',
    'lowercase',
    'capitalize',
  ],
};

function TextEditor() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className='text-editor-container'>
      <LexicalComposer initialConfig={initialConfig}>
        <HeadingInput />
        <InitialStructurePlugin />
        {/* <HandleEnterInHeadingPlugin /> */}
        {floatingAnchorElem && (
          <>
            <FloatingTextFormatToolbarPlugin
              anchorElem={floatingAnchorElem}
              setIsLinkEditMode={() => {}}
            />
          </>
        )}
        <RichTextPlugin
          contentEditable={
            <div className='editor' ref={onRef}>
              <ContentEditable className='text-editor-content-editable' />
            </div>
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={(editorState) => console.log(editorState)} />
        {/* <StrictHeadingPlugin /> */}
        {/* <RichTextPlugin
          contentEditable={
            <ContentEditable className='text-editor-content-editable' />
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        /> */}
      </LexicalComposer>
    </div>
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
