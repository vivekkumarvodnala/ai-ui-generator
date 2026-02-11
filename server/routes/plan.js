import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post("/", async (req, res) => {
  const { userInput } = req.body;

  try {
    const prompt = `
You are a UI planning agent.

Allowed components:
Button, Card, Input, Modal, Table, Sidebar, Navbar

Return STRICT JSON only in this format:

{
  "layout": [],
  "components": [
    { "type": "", "props": {} }
  ]
}

User Request:
${userInput}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ plan: text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
