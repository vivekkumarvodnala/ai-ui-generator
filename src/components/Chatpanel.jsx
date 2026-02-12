import { useState } from "react";
import axios from "axios";

export default function ChatPanel({
  setCode,
  setExplanation,
  setHistory
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      setError("");

      // 🔹 STEP 1: Call Planner Agent
      const planRes = await axios.post(
        "http://localhost:5000/plan",
        { userInput: input }
      );

      const plan = planRes.data.plan;

      // 🔹 STEP 2: Call Generator Agent
      const generateRes = await axios.post(
        "http://localhost:5000/generate",
        { plan }
      );

      const code = generateRes.data.code;

      // 🔹 STEP 3: Call Explanation Agent
      const explainRes = await axios.post(
        "http://localhost:5000/explain",
        { plan }
      );

      const explanation = explainRes.data.explanation;

      // 🔹 Update states
      setCode(code);
      setExplanation(explanation);

      // 🔹 Save to History (if provided)
      if (setHistory) {
        setHistory(prev => [
          ...prev,
          { input, code }
        ]);
      }

      setInput("");

    } catch (err) {
      console.error("Generation Error:", err);
      setError("Something went wrong while generating UI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>AI UI Generator</h3>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your UI..."
        style={{
          width: "100%",
          height: "80px",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "8px 16px",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "8px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
