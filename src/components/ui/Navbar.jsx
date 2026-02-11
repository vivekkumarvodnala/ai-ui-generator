export function Navbar({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "12px",
        fontWeight: "bold"
      }}
    >
      {title}
    </div>
  );
}
