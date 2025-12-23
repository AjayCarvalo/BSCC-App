'use client'
import { useEffect, useState } from "react";

const FixturesSun2 = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch(
          "http://play-cricket.com/api/v2/matches.json?&site_id=11371&season=2025&api_token=13776c06d7c5517b705e9926873b8cec"
        );
        const data = await response.json();
        setFixtures(data.matches || []);
      } catch (err) {
        console.error("An error occurred:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) return <div className="p-6">Loading fixtures...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">All Fixtures for 2025</h2>
      {fixtures.length === 0 ? (
        <p>No fixtures found.</p>
      ) : (
        <ul className="space-y-3">
          {fixtures
          .filter((match) =>
                match.competition_name === "Division 4" ||
                match.competition_name === "MPCL MINI CUP"
        ) // Filtering logic
          .map((match) => (
            <li key={match.id} className="border-b pb-2">
              <strong>{match.match_date}</strong>
              <br />
              <>{match.home_club_name} {match.home_team_name} vs {match.away_club_name} {match.away_team_name}</>
              <br />
              <span className="text-sm text-gray-600">{match.ground_name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FixturesSun2;
