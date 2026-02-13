export function Navbar({ brand, title, links = [] }) {
  const heading = brand || title;

  return (
    <div
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        {heading}
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{ color: "white", textDecoration: "none" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
