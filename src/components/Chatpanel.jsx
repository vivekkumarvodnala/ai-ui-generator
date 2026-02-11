import { useState } from "react";
import axios from "axios";

export default function ChatPanel({ setCode,setExplanation,setHistory }) {
  const [input, setInput] = useState("");

  const handleGenerate = async () => {
    try {
      // Step 1: Call Planner
      const planRes = await axios.post("http://localhost:5000/plan", {
        userInput: input,
      });

      const plan = planRes.data.plan;

      console.log("Plan:", plan);

      // Step 2: Call Generator
      const generateRes = await axios.post("http://localhost:5000/generate", {
        plan: plan,
      });
      const explainRes = await axios.post("http://localhost:5000/explain", {
        plan: plan,
      });

      setExplanation(explainRes.data.explanation);

      const code = generateRes.data.code;


      console.log("Generated Code:", code);

      // Step 3: Set Code in Editor
      setCode(code);
      setHistory(prev => [...prev, { input, code }]);

    } catch (error) {
      console.error("Error generating UI:", error);
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>AI Chat</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your UI..."
        style={{ width: "100%", padding: "8px" }}
      />

      <button onClick={handleGenerate} style={{ marginTop: "10px" }}>
        Generate
      </button>
    </div>
  );
}
