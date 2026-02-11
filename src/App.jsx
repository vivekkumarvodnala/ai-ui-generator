import { useState } from "react";
import ChatPanel from "./components/Chatpanel.jsx";
import CodeEditorPanel from "./components/CodeEditorPanel.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";

export default function App() {

  const [code, setCode] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <div style={{ width: "25%", borderRight: "1px solid #ddd" }}>
        <ChatPanel setCode={setCode} />
      </div>

      <div style={{ width: "35%", borderRight: "1px solid #ddd" }}>
        <CodeEditorPanel code={code} setCode={setCode} />
      </div>

      <div style={{ flex: 1 }}>
        <PreviewPanel code={code} />
      </div>

    </div>
  );
}
