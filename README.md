# 🚀 Ryze AI – AI UI Generator

## 🌟 Overview

Ryze AI is a multi-agent AI system that converts natural language descriptions into deterministic, validated React UI components in real time.

It combines structured planning, constrained generation, validation, and live dynamic rendering to ensure safe and controlled UI creation.

---

## 🏗 System Architecture

User Input
↓
Planner Agent → Structured UI Plan (JSON)
↓
Generator Agent → Deterministic JSX Fragment
↓
Validation Layer → Component Whitelist Enforcement
↓
Babel Standalone → Runtime JSX Compilation
↓
Dynamic Live Preview Rendering
↓
Explanation Agent → Structured UI Reasoning
↓
Version History → Iterative Modification Support



---

## 🤖 Multi‑Agent Design

### 1️⃣ Planner Agent
- Converts user intent into structured layout JSON.
- Restricts output to approved components only.
- Supports incremental UI modification.
- Prevents arbitrary structure injection.

### 2️⃣ Generator Agent
- Converts UI plan into strict JSX fragment.
- Enforces:
  - No imports
  - No exports
  - No markdown
  - No function wrappers
- Deterministic component generation only.

### 3️⃣ Explanation Agent
- Produces concise, structured reasoning including:
  - Layout Strategy
  - Component Decisions
  - Usability Benefits
  - Scalability Considerations

---

## 🔒 Safety & Determinism

- Component whitelist validation
- No arbitrary JSX execution
- Defensive rendering logic
- Controlled dynamic evaluation via Babel
- Structured JSON-only planning output
- Incremental state-aware planning

---

## 🧠 Key Features

- Natural language → live UI generation
- Incremental UI modification
- Version history tracking
- Secure component rendering
- Modern SaaS-style UI system
- Dynamic runtime compilation
- Production-ready deployment

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Babel Standalone
- Axios
- Custom UI Component Library

### Backend
- Express.js
- Google Gemini API (2.5 Flash)
- Structured prompt orchestration
- Component validation layer

---

## 📁 Project Structure

root/
├── src/ # React frontend
├── server/ # Express backend
├── package.json
├── vite.config.js



---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-ui-generator.git
cd ai-ui-generator
2️⃣ Install Frontend
npm install
3️⃣ Setup Backend
cd server
npm install
Create .env file inside server/:

GEMINI_API_KEY=your_api_key_here
4️⃣ Run Backend
node index.js
5️⃣ Run Frontend (from root)
npm run dev
🌍 Deployment
Frontend:
https://ai-ui-generator-2wci.vercel.app

Backend:
https://ai-ui-generator-fowq.onrender.com

📌 Design Philosophy
Ryze AI focuses on:

Constrained generation over free-form AI output

Safety-first execution model

Structured intermediate representations

Clear reasoning transparency

Production-readiness

Deterministic component control

🧪 Example Prompt
Create a SaaS dashboard with a navbar, sidebar, stats cards, and a user table.
The system will:

Generate structured JSON plan

Convert to JSX using allowed components

Validate output

Compile dynamically

Render preview instantly

Explain design decisions clearly

🏆 Highlights
Multi-agent orchestration pattern

Secure AI-generated UI rendering

Incremental modification support

Production deployment ready

Clean, modern UI system

Structured explanation output

📬 Author
Vivek Kumar Vodnala
AI UI Generator – Ryze Full Stack Assignment


---

✅ This is clean  
✅ Professional  
✅ Evaluator-friendly  
✅ Production-level tone  
✅ Shows architecture depth  

If you want, I can also give you a **shorter 1-page version** in case submission reviewers prefer concise documentation.


