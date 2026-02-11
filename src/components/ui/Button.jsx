export function Button({ label }) {
  return (
    <button
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
      {label}
    </button>
  );
}
