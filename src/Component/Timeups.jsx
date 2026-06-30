// ─── Time's Up Overlay ─────────────────────────────────────────────────────
function TimeUpOverlay({ onDismiss }) {
  return (
    <div
      onClick={onDismiss}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
        cursor: "pointer",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 64 }}>⏰</div>
        <div style={{ color: PINK, fontWeight: 900, fontSize: 52, letterSpacing: 2 }}>TIME IS UP!</div>
        <div style={{ color: TEXT_MUTED, marginTop: 12, fontSize: 15 }}>Click anywhere to dismiss</div>
      </div>
    </div>
  );
}
export default TimeUpOverlay
