export default function CodeEditorPanel() {
  return (
    <div style={{ padding: "16px" }}>
      <h3>Generated Code</h3>

      <textarea
        style={{
          width: "100%",
          height: "400px",
          padding: "10px"
        }}
      />
    </div>
  );
}
