import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import data from '../../../../../public/mock-data/data.json';
import { SerializedEditorState } from 'lexical';

function JsonEditor() {
  const [editor] = useLexicalComposerContext();
  const params = useParams();

  useEffect(() => {
    try {
      const file = data.filter((item) => item.id === Number(params.fileId));
      const newEditorState = editor.parseEditorState(
        file[0].content as SerializedEditorState
      );
      setTimeout(() => {
        editor.setEditorState(newEditorState);
      }, 0);
    } catch (error) {
      console.error(error);
    }
  }, [editor, params.fileId]);

  return null;

  // <button
  //     onClick={() => {
  //       const json = editor.getEditorState().toJSON();
  //       console.log(json);
  //       navigator.clipboard.writeText(JSON.stringify(json));
  //     }}
  //   >
  //     Перевести в JSON
  //   </button>
}

export default JsonEditor;
