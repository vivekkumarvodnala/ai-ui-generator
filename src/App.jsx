import ChatPanel from "./components/Chatpanel.jsx";
import CodeEditorPanel from "./components/CodeEditorPanel.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* LEFT: Prompt / Chat Panel */}
      <div
        style={{
          width: "25%",
          minWidth: "250px",
          borderRight: "1px solid #ddd",
          height: "100%",
        }}
      >
        <ChatPanel />
      </div>

      {/* MIDDLE: Code Editor */}
      <div
        style={{
          width: "40%",
          minWidth: "300px",
          borderRight: "1px solid #ddd",
          height: "100%",
        }}
      >
        <CodeEditorPanel />
      </div>

      {/* RIGHT: Preview / Output Panel */}
      <div
        style={{
          flex: 1,
          height: "100%",
        }}
      >
        <PreviewPanel />
      </div>
    </div>
  );
}