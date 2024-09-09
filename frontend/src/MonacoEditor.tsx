import { Editor } from "@monaco-editor/react";
function EditorWindow() {
  return (
    <div>
      <Editor
        height="90vh"
        width="90vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}
export default EditorWindow;