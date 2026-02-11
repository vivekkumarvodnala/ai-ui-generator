import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

router.post("/", async (req, res) => {
  const { plan } = req.body;

  try {
  const prompt = `
You are a senior product designer working at a top-tier SaaS company.

Explain the reasoning behind UI decisions clearly and confidently.

UI Plan:
${JSON.stringify(plan, null, 2)}
`;


    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ explanation: text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
