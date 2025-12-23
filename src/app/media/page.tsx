// src/app/fixtures/page.tsx
export default function MediaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Media</h1>
      <p className="text-gray-300 mb-4">
        This page will show fixtures pulled from the league API.
      </p>
      <p className="text-sm text-gray-400">
        For now this is a placeholder. Later we&apos;ll connect to the league
        website using an API and show upcoming & past fixtures.
      </p>
    </div>
  );
}
