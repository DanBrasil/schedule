import { ITable } from "./interface";

const Table = ({ row, column, children }: ITable) => {
  return (
    <div>
      {Array(row)
        .fill("row")
        .map((rowItem, rowKey) => (
          <div style={{ display: "flex" }} key={`table-row-${rowKey}`}>
            {Array(column)
              .fill("column")
              .map((columItem, columnKey) => (
                <div
                  style={{ border: "1px solid black" }}
                  key={`table-row-${rowKey}-column-${columnKey}`}
                >
                  {`${rowItem}-${rowKey}:${columItem}-${columnKey}`}
                  <br />
                  {children}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Table;
