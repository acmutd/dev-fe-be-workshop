// src/App.jsx
import { useMemo, useState } from "react";
import { WidgetCard } from "./components/WidgetCard.jsx";
import { FALLBACK_ACCENT, FALLBACK_TITLE } from "./config.js";

// Vite can import JSON files directly.
import sampleStatus from "./data/status.sample.json";

export default function App() {
  // Start with local JSON so students can visualize the structure first.
  const [data, setData] = useState(sampleStatus);

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
          <button
            className="btn"
            onClick={() => setData({ ...data, updatedAt: new Date().toISOString() })}
          >
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
