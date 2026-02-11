/* eslint-disable */
import { useMemo, useState, useEffect } from "react";
import { WidgetCard } from "./components/WidgetCard.jsx";
import { FALLBACK_ACCENT, FALLBACK_TITLE } from "./config.js";

// Start with local JSON to visualize the structure first.
import sampleStatus from "./data/status.sample.json";

export default function App() {
  // Step 2a: Start with sample data, then replace with backend JSON from fetch("/api/status")
  const [data, setData] = useState(sampleStatus);

  // Step 2b: Add loading state (boolean)
  // TODO: const [loading, setLoading] = useState(false);

  // Step 2c: Add error state (string or null)
  // TODO: const [error, setError] = useState(null);

  // Step 2a: Implement fetchStatus()
  // Outline:
  // 1) setLoading(true)
  // 2) setError(null)
  // 3) const response = await fetch("/api/status")
  // 4) If response.ok is false, throw an Error that includes response.status
  // 5) const json = await response.json()
  // 6) setData(json)
  // 7) catch (err): setError(err.message)
  // 8) finally: setLoading(false)
  //
  // TODO: const fetchStatus = async () => { ... };

  // Step 2a: Fetch once on mount using useEffect
  // Outline:
  // - useEffect(() => { fetchStatus(); }, []);
  //
  // TODO: uncomment once fetchStatus exists and works
  // useEffect(() => {
  //   fetchStatus();
  // }, []);

  const accent = useMemo(() => {
    return data?.theme?.accent ?? FALLBACK_ACCENT;
  }, [data]);

  return (
    <div className="page" style={{ ["--accent"]: accent }}>
      <header className="header">
        <div>
          <div className="title">{data?.title ?? FALLBACK_TITLE}</div>
          <div className="subtitle">
            Updated:{" "}
            {data?.updatedAt ? new Date(data.updatedAt).toLocaleString() : "—"}
          </div>
        </div>

        <div className="actions">
          {/* Step 2d: Replace this “Fake Refresh” with fetchStatus(), and disable the button while loading */}
          <button
            className="btn"
            onClick={() => setData({ ...data, updatedAt: new Date().toISOString() })}
            // TODO: disabled={loading}
          >
            {/* TODO: {loading ? "Loading..." : "Refresh"} */}
            Fake Refresh
          </button>

          {/* Later: point this to /api/status so you can see the real backend JSON */}
          <a
            className="link"
            href="/src/data/status.sample.json"
            target="_blank"
            rel="noreferrer"
          >
            View sample JSON
          </a>
        </div>
      </header>

      <main className="grid">
        {/* Step 2b: Show a loading UI when loading is true */}
        {/* TODO: {loading && <div className="loading">Loading dashboard...</div>} */}

        {/* Step 2c: Show an error UI when error is not null */}
        {/* TODO: {error && <div className="error">Error: {error}</div>} */}

        {/* Step 2b/c: Only render widgets when NOT loading and there is NO error */}
        {/* Outline:
            - if (loading) show loading
            - else if (error) show error
            - else map widgets
        */}
        {(data?.widgets ?? []).map((w) => (
          <WidgetCard key={w.id} label={w.label} value={w.value} hint={w.hint} />
        ))}
      </main>

      <footer className="footer">
        Next step: replace sample data with <code>fetch("/api/status")</code>.
      </footer>
    </div>
  );
}
