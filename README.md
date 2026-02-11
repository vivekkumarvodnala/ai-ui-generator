# AI UI Generator

## Overview
An AI-powered multi-agent system that converts natural language into deterministic React UI components.

## Architecture

User Input  
→ Planner Agent (structured layout JSON)  
→ Generator Agent (JSX output using allowed components)  
→ Validation Layer (component whitelist enforcement)  
→ Babel Compilation  
→ Dynamic Live Preview Rendering  
→ Explanation Agent (reasoning display)  
→ Version History (generation tracking)

## Agents

### Planner Agent
- Converts user description into structured UI plan JSON.
- Restricts output to allowed components.

### Generator Agent
- Converts plan into JSX fragment.
- Strictly no imports, no export, no markdown.
- Deterministic component usage.

### Explanation Agent
- Explains why specific components and layout were chosen.

## Safety Measures
- Component whitelist validation
- No arbitrary JSX allowed
- Controlled dynamic evaluation

## Tech Stack
- React
- Express
- Gemini API
- Babel Standalone

## Deployment
Frontend + Backend deployed via (Vercel / Render / etc.)
