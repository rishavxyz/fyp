import React from "react";
import * as XLSX from 'xlsx';
// import { useLocation } from "react-router-dom";

const Routine_Display = () => {
  // const location = useLocation();
  // const response = location.state.response;
  const storedData = localStorage.getItem("routineData");
  const response = storedData ? JSON.parse(storedData) : null;

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
  
    Object.keys(response).forEach(groupKey => {
      const sheetData = response[groupKey];
      const rows = [];
  
      Object.keys(sheetData).forEach(dayKey => {
        const dayData = sheetData[dayKey];
        const rowData = {
          'Day / Time': daysOfWeek[parseInt(dayKey)], // Assuming daysOfWeek is defined elsewhere
        };
  
        // Fill in the data for each time slot
        for (let i = 0; i <= 2; i++) {
          rowData[`Time${i}`] = dayData[i] || "-";
        }
  
        // Add the break
        rowData['Break'] = 'Break';

        for (let i = 3; i <= 5; i++) {
          rowData[`Time${i}`] = dayData[i] || "-";
        }
  
        // for (let i = 6; i <= 8; i++) {
        //   rowData[`Time${i}`] = dayData[i] || "-";
        // }
  
        rows.push(rowData);
      });
  
      const ws = XLSX.utils.json_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, `Section - ${groupKey}`);
    });
  
    XLSX.writeFile(wb, 'schedule.xlsx');
  };
  
  

  return (
    <div>
      <div>
        <h2>Generated Routine</h2>
        <button onClick={exportToExcel}>Download Routine</button>
      </div>

      {response ? (
        Object.keys(response).map((groupKey) => (
          <div key={groupKey} className="m-4">
            <h2 className="text-lg font-semibold mb-2">Section - {groupKey}</h2>
            <table className="table-auto w-full mb-10 border-collapse border border-black rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="border border-black p-2">Day / Time</th>
                  <th className="border border-black p-2">10:00</th>
                  <th className="border border-black p-2">11:00</th>
                  <th className="border border-black p-2">12:00</th>
                  <th className="border border-black p-2">13:00</th>
                  <th className="border border-black p-2">14:00</th>
                  <th className="border border-black p-2">15:00</th>
                  <th className="border border-black p-2">16:00</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(response[groupKey]).map((dayKey, index) => (
                  <tr
                    key={dayKey}
                    className={index % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}
                  >
                    <td className="border border-black p-2">
                      {daysOfWeek[index]}
                    </td>
                    {[0, 1, 2].map((slot) => (
                      <td key={slot} className="border border-black p-2">
                        {response[groupKey][dayKey][slot] || "-"}
                      </td>
                    ))}
                    <td className="border border-black p-2">Break</td>
                    {[3, 4, 5].map((slot) => (
                      <td key={slot} className="border border-black p-2">
                        {response[groupKey][dayKey][slot] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <div>
          <p className="mt-20 font-semibold text-3xl text-red-500">
            Sorry! No Data Available
          </p>
          <p className="mt-8 font-semibold text-xl">Kindly Generate The Routine First</p>
        </div>
      )}
    </div>
  );
};

export default Routine_Display;
