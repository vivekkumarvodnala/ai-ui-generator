import { useState } from "react";
import ChatPanel from "./components/Chatpanel.jsx";
import CodeEditorPanel from "./components/CodeEditorPanel.jsx";
import PreviewPanel from "./components/PreviewPanel.jsx";

export default function App() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [history, setHistory] = useState([]);


  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* HEADER */}
      <div
        style={{
          padding: "18px 28px",
          fontSize: "20px",
          fontWeight: "600",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          color: "white",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
        }}
      >
        🚀 AI UI Studio
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: "20px",
          gap: "20px",
        }}
      >
        {/* CHAT PANEL */}
        <div
          className="card"
          style={{
            width: "25%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 12,
              color: "#6366f1",
            }}
          >
            💬 AI Chat
          </div>
          <ChatPanel setCode={setCode} setExplanation={setExplanation} setHistory={setHistory}   />
        </div>
        <div>
          <h4>History</h4>
          {history.map((item, index) => (
            <div key={index}
              style={{ cursor: "pointer", marginBottom: "8px" }}
              onClick={() => setCode(item.code)}
            >
              {item.input}
            </div>
          ))}
        </div>


        {/* CODE EDITOR */}
        <div
          className="card"
          style={{
            width: "35%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
          >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 12,
              color: "#8b5cf6",
            }}
            >
            🧠 Code Editor
          </div>
          <CodeEditorPanel code={code} setCode={setCode} />
        </div>

        {/* PREVIEW */}
        <div
          className="card"
          style={{
            flex: 1,
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 12,
              color: "#ec4899",
            }}
          >
            🎨 Live Preview
          </div>
          <PreviewPanel code={code} />

          <div style={{ padding: "16px", borderTop: "1px solid #ddd" }}>
            <h3>AI Reasoning</h3>
            <p>{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
