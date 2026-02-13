export function Sidebar({ items = [] }) {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#111827",
        padding: "20px 16px",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ marginBottom: "24px", fontWeight: "600", fontSize: "18px" }}>
        Menu
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, index) => {
          const label =
            typeof item === "object" ? item.label : item;

          const href =
            typeof item === "object" ? item.href : "#";

          return (
            <a
              key={index}
              href={href}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                color: "white",
                fontSize: "14px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#1f2937")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
