export function Card({ title, children, content }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "16px",
      }}
    >
      {title && (
        <h3
          style={{
            marginBottom: "12px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#111827",
          }}
        >
          {title}
        </h3>
      )}

      <div style={{ color: "#374151" }}>
        {children || content}
      </div>
    </div>
  );
}
