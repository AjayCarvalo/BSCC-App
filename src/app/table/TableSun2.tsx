'use client';
import { useEffect, useState } from "react";

const TableSun2 = () => {
  const [tableData, setTableData] = useState([]);
  const [headings, setHeadings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const response = await fetch(
          "http://play-cricket.com/api/v2/league_table.json?division_id=128299&api_token=13776c06d7c5517b705e9926873b8cec"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHeadings(data.league_table[0]?.headings || {}); // Extract column names
        setTableData(data.league_table[0]?.values || []); // Extract table values
      } catch (err) {
        setError("Failed to fetch league table.");
      } finally {
        setLoading(false);
      }
    };

    fetchTable();
  }, []);

  if (loading) return <div className="p-6 text-center">🔄 Loading League Table...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">MPCL Division 4 League Table</h2>

      <div className="overflow-x-auto">
        {tableData.length === 0 ? (
          <p className="text-center">No data found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-red-900 text-white">
                {Object.values(headings).map((heading, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((team, index) => (
                <tr
                  key={index}
                  className={`border border-gray-300 hover:bg-gray-100 transition duration-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {Object.keys(headings).map((key, idx) => (
                    <td key={idx} className="border border-gray-300 px-4 py-2">
                      {team[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div>
          <h1>
          p - Played, w - Won (22), t - Tied (14), l - Lost (0), a/c - Abandonned/Cancelled, wcn - Opposition Conceded (22), lcn - Team Conceded (0), BatP - Batting Bonus Points, BowlP - Bowling Bonus Points, OffBP - Officials Bonus Points, Pen - Penalty Points, Pts - Points
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TableSun2;