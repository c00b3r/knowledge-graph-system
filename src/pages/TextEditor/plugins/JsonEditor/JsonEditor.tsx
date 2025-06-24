import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

function JsonEditor() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    console.log(editor);
  }, [editor]);

  return (
    <button
      onClick={() => {
        const json = editor.getEditorState().toJSON();
        console.log(json);
        navigator.clipboard.writeText(JSON.stringify(json));
      }}
    >
      Перевести в JSON
    </button>
  );
}

export default JsonEditor;
