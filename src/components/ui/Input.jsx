export function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "100%",
        marginTop: "8px"
      }}
    />
  );
}
