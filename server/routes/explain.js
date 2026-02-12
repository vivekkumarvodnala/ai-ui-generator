import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { plan } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
You are a senior SaaS product architect.

Provide structured reasoning under these sections:

1. Layout Strategy
2. Component Selection Logic
3. UX Considerations
4. Constraint Awareness (mention allowed components rule)
5. Scalability Considerations

Be concise but insightful.

UI Plan:
${JSON.stringify(plan, null, 2)}
`;


    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    res.json({ explanation: text });

  } catch (error) {
    res.status(500).json({ error: "Explanation failed." });
  }
});

export default router;
