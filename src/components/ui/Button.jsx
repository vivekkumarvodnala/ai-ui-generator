export function Button({ label, text, children, onClick }) {
  const content = label || text || children;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        marginTop: "10px"
      }}
    >
      {content}
    </button>
  );
}
