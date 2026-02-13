import { useState } from "react";
import axios from "axios";

export default function ChatPanel({
  setCode,
  setExplanation,
  currentPlan,
  setCurrentPlan,
  history,
  setHistory,
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

 const handleGenerate = async () => {
  if (!input.trim()) return;

  try {
    setLoading(true);

    const planRes = await axios.post(`https://ai-ui-generator-fowq.onrender.com/plan`, {
      userInput: input,
      previousPlan: currentPlan,
    });

    const newPlan = planRes.data.plan;

    const generateRes = await axios.post(`https://ai-ui-generator-fowq.onrender.com/generate`, {
      plan: newPlan,
    });

    const newCode = generateRes.data.code;

    const explainRes = await axios.post(`https://ai-ui-generator-fowq.onrender.com/explain`, {
      plan: newPlan,
    });

    setCurrentPlan(newPlan);
    setCode(newCode);
    setExplanation(explainRes.data.explanation);
    setInput("");
    setHistory(prev => [
  {
    id: Date.now(),
    userInput: input,
    plan: newPlan,
    code: newCode,
    explanation: explainRes.data.explanation,
  },
  ...prev,
]);


  } catch (error) {
    console.error("Generation error:", error.response?.data || error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe or modify your UI..."
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}
