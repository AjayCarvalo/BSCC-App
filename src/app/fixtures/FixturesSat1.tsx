'use client';

import { useEffect, useState } from "react";

interface Match {
  id: string;
  match_date: string;
  competition_name: string;
  home_club_name: string;
  home_team_name: string;
  away_club_name: string;
  away_team_name: string;
  ground_name: string;
}

const FixturesSat1: React.FC = () => {
  const [fixtures, setFixtures] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await fetch(
          "https://play-cricket.com/api/v2/matches.json?&site_id=1360&season=2025&api_token=YOUR_API_TOKEN"
        );

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = (await response.json()) as { matches: Match[] };
        setFixtures(data.matches || []);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) return <div>Loading fixtures...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const filteredFixtures = fixtures.filter(
    (match) => match.competition_name === "Division 5B"
  );

  return (
    <ul>
      {filteredFixtures.map(match => (
        <li key={match.id}>
          {match.home_club_name} {match.home_team_name} vs {match.away_club_name} {match.away_team_name}
        </li>
      ))}
    </ul>
  );
};

export default FixturesSat1;
