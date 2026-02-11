import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post("/", async (req, res) => {
  const { plan } = req.body;

  try {
    const prompt = `
You are a React UI generator.

Rules:
- Only use allowed components.
- Do not create new components.
- Do not add CSS.
- Return full React functional component only.

Plan:
${plan}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ code: text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
