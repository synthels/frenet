import TextEditor from "./TextEditor";
import Player from "./Player";

import "./style/editor.scss";

function Editor() {
  return (
    <div className="editor">
      <div className="panel">
        <Player />
      </div>
      <div className="panel">
        <TextEditor />
      </div>
    </div>
  );
}

export default Editor;
