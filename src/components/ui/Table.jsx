import React from "react";

export function Table({
  columns = [],
  data = [],
  rows = [],
}) {

  // Normalize data safely
  let tableData = [];

  if (Array.isArray(data)) {
    tableData = data;
  } else if (Array.isArray(rows)) {
    tableData = rows;
  } else if (typeof data === "object" && data !== null) {
    tableData = [data];
  }

  if (!Array.isArray(tableData)) {
    tableData = [];
  }

  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f9fafb" }}>
              {columns.map((col, index) => {
                const headerText =
                  typeof col === "object"
                    ? col.header || col.label || ""
                    : col;

                return (
                  <th
                    key={index}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#111827",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    {headerText}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor:
                      rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb",
                  }}
                >
                  {columns.map((col, colIndex) => {
                    let accessor;

                    if (typeof col === "object") {
                      accessor = col.accessor || col.id;
                    } else {
                      accessor = col;
                    }

                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: "12px 16px",
                          borderBottom: "1px solid #f1f5f9",
                          color: "#374151",
                        }}
                      >
                        {row?.[accessor] ?? ""}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
