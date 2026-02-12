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
  <>
  ${cleanedCode}
  </>
  );
  }
  `;


        // 🟢 Compile JSX to JS
        const compiled = Babel.transform(wrappedCode, {
        presets: [
    ["react", { runtime: "classic" }]
  ],

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
  <div
    style={{
      backgroundColor: "#ffffff",
      color: "#111827",
      padding: "16px",
      minHeight: "100%",
      borderRadius: "12px",
      overflow: "auto"
    }}
  >
    <h3 style={{ marginBottom: "12px", color: "#0f172a" }}>
      Live Preview
    </h3>

    {GeneratedComponent ? (
      <div style={{ color: "#111827" }}>
        <GeneratedComponent />
      </div>
    ) : (
      <p style={{ color: "#475569" }}>No preview yet</p>
    )}
  </div>
);

  }
