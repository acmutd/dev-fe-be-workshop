// src/App.jsx
import { useMemo, useState, useEffect } from "react";
import { WidgetCard } from "./components/WidgetCard.jsx";
import { FALLBACK_ACCENT, FALLBACK_TITLE } from "./config.js";

// Vite can import JSON files directly.
import sampleStatus from "./data/status.sample.json";

export default function App() {
  // Start with local JSON so students can visualize the structure first.
  // WORKSHOP TODO (Step 2a): Replace this with data from fetch("/api/status")
  const [data, setData] = useState(sampleStatus);
  
  // WORKSHOP TODO (Step 2b): Add loading state
  // const [loading, setLoading] = useState(false);
  
  // WORKSHOP TODO (Step 2c): Add error state  
  // const [error, setError] = useState(null);

  // WORKSHOP TODO (Step 2a): Add useEffect to fetch data on component mount
  // useEffect(() => {
  //   fetchStatus();
  // }, []);

  // WORKSHOP TODO (Step 2a): Create fetchStatus function
  // const fetchStatus = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const response = await fetch("/api/status");
  //     if (!response.ok) throw new Error("Failed to fetch");
  //     const result = await response.json();
  //     setData(result);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const accent = useMemo(() => {
    return data?.theme?.accent ?? FALLBACK_ACCENT;
  }, [data]);

  return (
    <div className="page" style={{ ["--accent"]: accent }}>
      <header className="header">
        <div>
          <div className="title">{data?.title ?? FALLBACK_TITLE}</div>
          <div className="subtitle">
            Updated: {data?.updatedAt ? new Date(data.updatedAt).toLocaleString() : "—"}
          </div>
        </div>

        <div className="actions">
          {/* WORKSHOP TODO (Step 2d): Replace onClick with fetchStatus() call */}
          <button
            className="btn"
            onClick={() => setData({ ...data, updatedAt: new Date().toISOString() })}
            // disabled={loading} // TODO: Uncomment when you add loading state
          >
            {/* {loading ? "Loading..." : "Refresh"} // TODO: Uncomment when you add loading state */}
            Fake Refresh
          </button>
          {/* Later you can change this link to /api/status */}
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
        {/* WORKSHOP TODO (Step 2b): Show loading state */}
        {/* {loading && <div className="loading">Loading dashboard...</div>} */}
        
        {/* WORKSHOP TODO (Step 2c): Show error state */}
        {/* {error && <div className="error">Error: {error}</div>} */}
        
        {/* WORKSHOP TODO (Step 2b): Only show widgets when not loading */}
        {/* {!loading && !error && (data?.widgets ?? []).map((w) => ( */}
        {(data?.widgets ?? []).map((w) => (
          <WidgetCard key={w.id} label={w.label} value={w.value} hint={w.hint} />
        ))}
        {/* ))} */}
      </main>

      <footer className="footer">
        {/* WORKSHOP TODO: Update this message as you complete each step */}
        Next step: replace sample data with <code>fetch("/api/status")</code>.
      </footer>
    </div>
  );
}
