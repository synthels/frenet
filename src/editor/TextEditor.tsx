import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function TextEditor() {
  const [setIsEditorReady]: any = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }

  return (
    <Editor
      /* @ts-ignore */
      editorDidMount={handleEditorDidMount}
      height={"100%"}
      theme={"vs-dark"}
      language={"python"}
    />
  );
}

export default TextEditor;
