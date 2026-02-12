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
          boxShadow: "0 4px 20px rgba(99,102,241,0.3)"
        }}
      >
        🚀 AI UI Studio
      </div>

      {/* MAIN LAYOUT */}
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: "24px",
          gap: "24px",
        }}
      >

        {/* LEFT: CHAT + HISTORY */}
        <div
          className="card"
          style={{
            width: "28%",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 600,
                marginBottom: 10,
                color: "#6366f1",
              }}
            >
              💬 AI Chat
            </div>
            <ChatPanel
              setCode={setCode}
              setExplanation={setExplanation}
              setHistory={setHistory}
            />
          </div>

          {/* HISTORY */}
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.05)",
              paddingTop: "16px",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                marginBottom: 12,
                fontSize: "14px",
                color: "#475569",
              }}
            >
              🕓 Recent Requests
            </div>

            <div style={{ overflowY: "auto", maxHeight: "200px" }}>
              {history.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "8px 10px",
                    borderRadius: "8px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    fontSize: "13px",
                    background: "rgba(99,102,241,0.05)"
                  }}
                  onClick={() => setCode(item.code)}
                >
                  {item.input}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER: CODE EDITOR */}
        <div
          className="card"
          style={{
            width: "36%",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 14,
              color: "#8b5cf6",
            }}
          >
            🧠 Code Editor
          </div>

          <div style={{ flex: 1, overflow: "hidden" }}>
            <CodeEditorPanel code={code} setCode={setCode} />
          </div>
        </div>

        {/* RIGHT: PREVIEW + REASONING */}
        <div
          className="card"
          style={{
            flex: 1,
            padding: "18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 14,
              color: "#ec4899",
            }}
          >
            🎨 Live Preview
          </div>

          <div style={{ flex: 1, overflow: "auto", marginBottom: "16px" }}>
            <PreviewPanel code={code} />
          </div>

          {/* Reasoning Section */}
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              paddingTop: "14px",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                marginBottom: "8px",
                fontSize: "14px",
                color: "#475569",
              }}
            >
              🧠 AI Design Reasoning
            </div>

            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#334155",
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {explanation || "Design reasoning will appear here."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
