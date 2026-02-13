export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text"
}) {
  return (
    <div style={{ marginTop: "12px", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#111827"
          }}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          width: "100%",
          fontSize: "14px",
          outline: "none",
          transition: "all 0.2s ease",
        }}
        onFocus={(e) => {
          e.target.style.border = "1px solid #2563eb";
          e.target.style.boxShadow = "0 0 0 2px rgba(37,99,235,0.2)";
        }}
        onBlur={(e) => {
          e.target.style.border = "1px solid #d1d5db";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
