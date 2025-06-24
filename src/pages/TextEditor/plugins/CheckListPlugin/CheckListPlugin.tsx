import { registerCheckList } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

function CheckListPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return registerCheckList(editor);
  }, [editor]);

  return null;
}

export default CheckListPlugin;
