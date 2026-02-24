/* eslint-disable */
import { useMemo, useState, useEffect } from "react";
import { WidgetCard } from "./components/WidgetCard.jsx";
import { FALLBACK_ACCENT, FALLBACK_TITLE } from "./config.js";

// We're using sample data for now, but we'll replace this with a real API call in the next steps.
import sampleStatus from "./data/status.sample.json";

export default function App() {
  const [data, setData] = useState(sampleStatus);

  // Step 1: Add Loading and Error States


  // Step 2: Create the fetchStatus Function


  // Step 3: Fetch Data on Page Load

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
          <button
            className="btn"
            // Step 4: Replace "Fake Refresh" With Real Refresh
            onClick={() => setData({ ...data, updatedAt: new Date().toISOString() })}>
            Fake Refresh
          </button>
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

      {/* Step 5: Show Loading and Error UI */}
      <main className="grid">
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
