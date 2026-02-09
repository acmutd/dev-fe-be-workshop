export function WidgetCard({ label, value, hint }) {
  return (
    <div className="card">
      <div className="cardLabel">{label}</div>
      <div className="cardValue">{value}</div>
      {hint ? <div className="cardHint">{hint}</div> : null}
    </div>
  );
}
