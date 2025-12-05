export default function StatsCard({ title, value }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        border: "1px solid #ddd",
        width: 200
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}
