import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'; // Load .env variables at the very top

const router = express.Router();

// 1. Initialize API with safety check
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ ERROR: GEMINI_API_KEY is not defined in your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// 2. Configure the model for 2026 performance
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash", // Change from 'pro' to 'flash'
  generationConfig: {
    responseMimeType: "application/json",
  }
});

router.post("/", async (req, res) => {
  const { userInput } = req.body;

  // Validate input
  if (!userInput) {
    return res.status(400).json({ error: "No user input provided." });
  }

  try {
    const prompt = `
      You are a UI planning agent.
      Allowed components: Button, Card, Input, Modal, Table, Sidebar, Navbar

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

    // Parse the string into a real JSON object before sending
    const plan = JSON.parse(text);

    res.json({ plan });

  } catch (error) {
    console.error("Gemini API Error:", error.message);
    
    // Check for common 403 errors (invalid key/unregistered caller)
    if (error.message.includes("403")) {
      return res.status(403).json({ 
        error: "API Authentication Failed. Check if your API Key is correctly set in .env" 
      });
    }

    res.status(500).json({ error: "Internal Server Error during UI generation." });
  }
});

export default router;