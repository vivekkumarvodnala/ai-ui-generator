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
    <div style={{ overflowX: "auto", marginTop: "16px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ccc"
        }}
      >
        <thead>
          <tr>
            {columns.map((col, index) => {
              const headerText =
                typeof col === "object"
                  ? col.header || col.label || ""
                  : col;

              return (
                <th
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    backgroundColor: "#f4f4f4",
                    textAlign: "left"
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
              <tr key={rowIndex}>
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
                        border: "1px solid #ccc",
                        padding: "8px"
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
                  padding: "8px",
                  textAlign: "center"
                }}
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
