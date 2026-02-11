export function Table({ columns, data }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px"
      }}
    >
      <thead>
        <tr>
          {columns &&
            columns.map((col, index) => (
              <th
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f3f4f6"
                }}
              >
                {col}
              </th>
            ))}
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px"
                  }}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
