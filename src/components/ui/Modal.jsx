export function Modal({
  isOpen = true,
  title,
  children,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          width: "400px",
          maxWidth: "90%",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          {title && (
            <h4
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
              }}
            >
              {title}
            </h4>
          )}

          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#6b7280",
              }}
            >
              ✕
            </button>
          )}
        </div>

        <div style={{ color: "#374151" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
