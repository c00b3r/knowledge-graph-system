import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode } from '@lexical/rich-text';
import { LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import InitialStructurePlugin from './plugins/InitialStructurePlugin';
import './TextEditor.css';
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormater/FloatingTextFormater';
import { useEffect, useRef, useState } from 'react';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { EditorThemeClasses } from 'lexical';
import HeadingInput from './ui/HeadingInput';
import ContextMenu from './plugins/ContextMenu/ContextMenu';
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin/FloatingLinkEditorPlugin';

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
  link: 'editor-link',
};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  nodes: [HeadingNode, LinkNode],
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
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setContextMenu({ x: event.pageX, y: event.pageY });
    setContextMenuVisible(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      contextMenuRef.current &&
      contextMenuRef.current.contains(event.target as Node)
    ) {
      return;
    }
    setContextMenuVisible(false);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const editor = document.querySelector('.editor');
      const contextMenu = contextMenuRef.current;
      if (
        editor &&
        !editor.contains(event.target as Node) &&
        contextMenu &&
        !contextMenu.contains(event.target as Node)
      ) {
        setContextMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className='text-editor-container'>
      <LexicalComposer initialConfig={initialConfig}>
        <HeadingInput />
        <InitialStructurePlugin />
        <RichTextPlugin
          contentEditable={
            <div
              className='editor'
              ref={onRef}
              onClick={handleClick}
              onContextMenu={handleContextMenu}
            >
              <ContentEditable className='text-editor-content-editable' />
            </div>
          }
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <LinkPlugin />
        {floatingAnchorElem && (
          <>
            <FloatingTextFormatToolbarPlugin
              anchorElem={floatingAnchorElem}
              setIsLinkEditMode={() => {}}
            />
          </>
        )}
        {floatingAnchorElem && (
          <FloatingLinkEditorPlugin
            anchorElem={floatingAnchorElem}
            isLinkEditMode={isLinkEditMode}
            setIsLinkEditMode={setIsLinkEditMode}
          />
        )}
        {contextMenuVisible && (
          <ContextMenu
            contextMenu={contextMenu}
            contextMenuRef={contextMenuRef}
            setIsLinkEditMode={setIsLinkEditMode}
            setContextMenuVisible={setContextMenuVisible}
          />
        )}
        <HistoryPlugin />
        {/* <OnChangePlugin onChange={(editorState) => console.log(editorState)} /> */}
      </LexicalComposer>
    </div>
  );
}

export default TextEditor;
