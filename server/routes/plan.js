import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const router = express.Router();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is not defined.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

router.post("/", async (req, res) => {
  const { userInput, previousPlan } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: "No user input provided." });
  }

  try {
    const prompt = `
You are a deterministic UI planning agent.

Allowed components:
Button, Card, Input, Modal, Table, Sidebar, Navbar

STRICT RULES:
- Return STRICT JSON only.
- If previousPlan exists, MODIFY it minimally.
- Do NOT regenerate everything unless necessary.
- Preserve existing structure where possible.
- No explanation text.

VERY IMPORTANT:
You are modifying an existing UI.
Do NOT remove components unless user explicitly requests removal.
Do NOT reorder layout unless required.
Only apply minimal structural changes.


Previous Plan:
${previousPlan ? JSON.stringify(previousPlan, null, 2) : "None"}

User Request:
${userInput}

Return format:
{
  "layout": [],
  "components": [
    { "type": "", "props": {} }
  ]
}
`;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    const plan = JSON.parse(text);

    res.json({ plan });

  } catch (error) {
    console.error("Planner Error:", error);
    res.status(500).json({ error: "Planner failed." });
  }
});

export default router;
