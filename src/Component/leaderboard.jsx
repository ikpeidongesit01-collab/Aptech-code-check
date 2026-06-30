// ─── Leaderboard ──────────────────────────────────────────────────────────
import { CARD_BG, PINK, STUDENTS, TABLE_HEADER, TEAL, TEXT_MAIN, TEXT_MUTED } from './Navbar'

function Leaderboard() {
  const renderScore = (q) => {
    if (!q) return <span style={{ color: TEXT_MUTED }}>—</span>
    return (
      <span style={{ color: TEAL, fontWeight: 600 }}>
        + {q.score}:{q.penalty}
      </span>
    )
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ color: TEXT_MAIN, fontSize: 32, fontWeight: 800, marginBottom: 6 }}>Leaderboard</h1>
      <p style={{ color: TEXT_MUTED, marginBottom: '2rem' }}>
        Live standings — refreshes automatically every 30 seconds.
      </p>

      <div style={{ background: CARD_BG, borderRadius: 10, overflow: 'hidden' }}>
        <div
          style={{
            background: TABLE_HEADER,
            padding: '12px 24px',
            display: 'grid',
            gridTemplateColumns: '60px 1fr 140px 140px',
            fontWeight: 700,
            fontSize: 14,
            color: TEXT_MAIN
          }}>
          <span>#</span>
          <span>Name</span>
          <span style={{ textAlign: 'center' }}>Q1</span>
          <span style={{ textAlign: 'center' }}>Q2</span>
        </div>
        {STUDENTS.map((s, i) => (
          <div
            key={s.id}
            style={{
              padding: '14px 24px',
              display: 'grid',
              gridTemplateColumns: '60px 1fr 140px 140px',
              borderTop: '1px solid #1e2d48',
              alignItems: 'center',
              background: i === 0 ? 'rgba(232,88,122,0.05)' : 'transparent'
            }}>
            <span style={{ color: i < 3 ? PINK : TEXT_MUTED, fontWeight: i < 3 ? 700 : 400 }}>{i + 1}.</span>
            <span style={{ color: TEXT_MAIN, fontWeight: 500 }}>{s.name}</span>
            <span style={{ textAlign: 'center' }}>{renderScore(s.q1)}</span>
            <span style={{ textAlign: 'center' }}>{renderScore(s.q2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
