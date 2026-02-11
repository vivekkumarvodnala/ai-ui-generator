export default function CodeEditorPanel({ code, setCode }) {

  return (
    <div style={{ padding: "16px" }}>
      <h3>Generated Code</h3>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "400px",
          padding: "10px"
        }}
      />
    </div>
  );
}
