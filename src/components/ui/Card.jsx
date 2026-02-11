export function Card({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        marginTop: "16px"
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}
