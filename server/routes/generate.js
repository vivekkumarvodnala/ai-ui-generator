import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { plan } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
You are a React UI generator.

STRICT RULES:
- Return ONLY JSX fragment.
- No function wrapper.
- No import.
- No export.
- No markdown.
- No backticks.
- No explanation text.
- Only valid JSX.

Plan:
${JSON.stringify(plan)}
`;

    const result = await model.generateContent(prompt);

    const text = await result.response.text();

    res.json({ code: text });

  } catch (error) {
    console.error("Generator Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
