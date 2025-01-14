import { ITable } from "./interface";
import React, { Children } from 'react';
const Table = ({ row, column }: ITable) => {
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const daysOfWeek = [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  let daysInMonth = new Date(year, month + 1, 0).getDate();
   let firstDayOfMonth = new Date(year, month, 1).getDay();
  let counter = 1;

  const nextMonth = () => {
    setMonth((prev) => (prev + 1) % 12);
    if (month === 11) setYear((prev) => prev + 1);
  };

  const prevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  return (
    <div>
      <h2>
        {new Date(year, month).toLocaleDateString("pt-BR", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button onClick={prevMonth}>Last Month</button>
      <button onClick={nextMonth}>Next Month</button>
      <div>
      <div style={{ display: "flex" }}>
          {daysOfWeek.map((day, index) => (
            <div
              key={`header-${index}`}
              style={{
                border: "1px solid black",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
              }}
            >
              {day}
            </div>
          ))}
        </div>
        {Array(row)
          .fill("row")
          .map((rowItem, rowKey) => (
            <div style={{ display: "flex" }} key={`table-row-${rowKey}`}>
              {Array(column)
                .fill("column")
                .map((columnItem, columnKey) =>{
                  const cellIndex = rowKey * column + columnKey;
                    const dayInCell = cellIndex - firstDayOfMonth + 1;

                    return (
                  <div
                    style={{ border: "1px solid black", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", height: "50px"}}
                    key={`table-cell-${rowKey}-${columnKey}`}
                  >
                  
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                      }}
                      key={`table-cell-${rowKey}-${columnKey}`}
                    >
                      {dayInCell > 0 && dayInCell <= daysInMonth ? dayInCell : null}
                    
                  </div>
                  );
            
              </div>
  )
            

    export default Table;
