export function Modal({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginTop: "16px"
      }}
    >
      <h4>{title}</h4>
      {children}
    </div>
  );
}
