// ─── Problems List ─────────────────────────────────────────────────────────
import { CARD_BG, PINK, QUESTIONS, TABLE_HEADER, TEXT_MAIN, TEXT_MUTED } from './Navbar'

function ProblemList({ setPage, setCurrentQ }) {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ color: TEXT_MAIN, fontSize: 32, fontWeight: 800, marginBottom: 6 }}>Problem Set</h1>
      <p style={{ color: TEXT_MUTED, marginBottom: '2rem' }}>
        Select a problem to view details and submit your solution.
      </p>

      <div style={{ background: CARD_BG, borderRadius: 10, overflow: 'hidden' }}>
        <div
          style={{
            background: TABLE_HEADER,
            padding: '12px 24px',
            display: 'flex',
            gap: '1rem',
            fontWeight: 700,
            fontSize: 14,
            color: TEXT_MAIN
          }}>
          <span style={{ width: 40 }}>#</span>
          <span>Problem Title</span>
        </div>
        {QUESTIONS.map((q) => (
          <div
            key={q.id}
            onClick={() => {
              setCurrentQ(q.id)
              setPage('question')
            }}
            style={{
              padding: '16px 24px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              borderTop: '1px solid #1e2d48',
              cursor: 'pointer',
              transition: 'background 0.15s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1e2d48')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
            <span style={{ width: 40, color: TEXT_MUTED, fontWeight: 600 }}>{q.id}</span>
            <span style={{ color: PINK, fontWeight: 600, textDecoration: 'underline' }}>{q.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProblemList
