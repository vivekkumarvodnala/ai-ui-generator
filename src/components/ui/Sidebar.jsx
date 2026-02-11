export function Sidebar({ items }) {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#f3f4f6",
        padding: "16px"
      }}
    >
      {items &&
        items.map((item, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            {item}
          </div>
        ))}
    </div>
  );
}
