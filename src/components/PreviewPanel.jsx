import React from "react";
import * as Babel from "@babel/standalone";

import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Modal } from "./ui/Modal";
import { Table } from "./ui/Table";
import { Navbar } from "./ui/Navbar";
import { Sidebar } from "./ui/Sidebar";

export default function PreviewPanel({ code }) {

  let GeneratedComponent = null;

  try {
    if (code && code.trim() !== "") {

      // 🟢 Clean markdown & unwanted text
      let cleanedCode = code
        .replace(/```jsx/g, "")
        .replace(/```/g, "")
        .trim();

      // 🟢 Wrap JSX into App component automatically
      const wrappedCode = `
        function App() {
          return (
            ${cleanedCode}
          );
        }
      `;

      // 🟢 Compile JSX to JS
      const compiled = Babel.transform(wrappedCode, {
        presets: ["react"],
      }).code;

      // 🟢 Dynamically create component
      const Component = new Function(
        "React",
        "Button",
        "Card",
        "Input",
        "Modal",
        "Table",
        "Navbar",
        "Sidebar",
        compiled + "; return App;"
      );

      GeneratedComponent = Component(
        React,
        Button,
        Card,
        Input,
        Modal,
        Table,
        Navbar,
        Sidebar
      );
    }
  } catch (error) {
    console.error("Render Error:", error);
  }

  return (
    <div style={{ padding: "16px" }}>
      <h3>Live Preview</h3>
      {GeneratedComponent ? <GeneratedComponent /> : <p>No preview yet</p>}
    </div>
  );
}
