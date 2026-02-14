# AI UI Generator

An AI-powered multi-agent system that converts natural language into deterministic React UI components using Google's Gemini AI. This project features a React frontend for interaction and visualization, and an Express backend for AI processing.

## 🚀 Features

- **AI Chat Interface**: Describe your desired UI in natural language.
- **Structured Planning**: The system first creates a structural plan before generating code.
- **Deterministic React Code**: Generates clean, functional React components.
- **Live Preview**: Instantly render and interact with the generated UI.
- **Code Editor**: View and modify the generated code using the integrated Monaco Editor.
- **AI Explanation**: receive insights into the design decisions made by the AI.
- **Safety**: Uses a component whitelist and validation layer to ensure secure code generation.

## 🏗️ Architecture

The system operates using a pipeline of specialized AI agents:

1.  **User Input**: Natural language description of the UI.
2.  **Planner Agent**: Converts description into a structured JSON layout plan.
3.  **Generator Agent**: Converts the plan into a JSX fragment using allowed components.
4.  **Validation Layer**: Enforces component whitelisting (Button, Card, Input, Modal, Table, Navbar, Sidebar).
5.  **Explanation Agent**: Provides reasoning for the design choices.
6.  **Live Preview**: Renders the safe JSX in the frontend.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Monaco Editor, Axios
- **Backend**: Node.js, Express
- **AI**: Google Gemini API (`gemini-2.5-flash`)
- **Styling**: CSS (loaded via Vite), Inline Styles

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ai-ui-generator
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
PORT=5000
```

Start the backend server:

```bash
node app.js
```

The server will run on `http://localhost:5000`.

### 3. Frontend Setup

Open a new terminal, navigate to the project root, and install dependencies:

```bash
# From the project root (ai-ui-generator)
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

## ⚠️ Important Note on Local Development

This project currently has **hardcoded URLs** that point to a deployed production environment. To run the full stack locally, you must update the following files:

1.  **Frontend (`src/components/Chatpanel.jsx`)**:
    Change all instances of `https://ai-ui-generator-fowq.onrender.com` to `http://localhost:5000`.

2.  **Backend (`server/app.js`)**:
    Update the CORS origin `https://ai-ui-generator-2wci.vercel.app` to include your local frontend URL (e.g., `http://localhost:5173`).

    ```javascript
    app.use(cors({
      origin: ["https://ai-ui-generator-2wci.vercel.app", "http://localhost:5173"]
    }));
    ```

## 📄 License

[ISC](LICENSE)
