const COMPETITION_DURATION = 75 * 60 // 75 minutes in seconds

export const QUESTIONS = [
  {
    id: 1,
    title: 'Sum of Two Numbers',
    description: 'Given two integers a and b on a single line separated by a space, output their sum.',
    inputFormat: 'A single line containing two integers a and b (−10⁹ ≤ a, b ≤ 10⁹) separated by a space.',
    outputFormat: 'A single integer — the sum of a and b.',
    examples: [
      { input: '3 5', output: '8', explanation: '3 + 5 = 8' },
      { input: '-4 10', output: '6', explanation: '-4 + 10 = 6' },
      { input: '0 0', output: '0', explanation: '0 + 0 = 0' }
    ]
  },
  {
    id: 2,
    title: 'Reverse a String',
    description: 'Given a string s, output the string reversed.',
    inputFormat: 'A single line containing a non-empty string s (1 ≤ |s| ≤ 10⁵).',
    outputFormat: 'The reversed string.',
    examples: [
      { input: 'hello', output: 'olleh', explanation: "Reverse of 'hello'" },
      { input: 'abcd', output: 'dcba', explanation: "Reverse of 'abcd'" },
      { input: 'a', output: 'a', explanation: 'Single character stays the same' }
    ]
  }
]

export const STUDENTS = [
  { id: 1, name: 'Wisdom Johnny', q1: { score: -23, penalty: 2, solved: true }, q2: null },
  { id: 2, name: 'Ekike-obong Thomas', q1: { score: -24, penalty: 2, solved: true }, q2: null },
  { id: 3, name: 'Ebuka Maduka', q1: { score: -26, penalty: 3, solved: true }, q2: null },
  { id: 4, name: 'Ifiokobong Etokakpan', q1: { score: -13, penalty: 1, solved: true }, q2: null },
  { id: 5, name: 'Victoria Obon', q1: { score: -21, penalty: 2, solved: true }, q2: null },
  { id: 6, name: 'Virtue Esua', q1: { score: -24, penalty: 2, solved: true }, q2: null },
  { id: 7, name: 'Mmeyaknno David', q1: { score: -25, penalty: 2, solved: true }, q2: null }
]

export const PINK = '#e8587a'
export const NAV_BG = '#141b2d'
export const CARD_BG = '#1a2235'
export const PAGE_BG = '#111827'
export const TEAL = '#22d3a5'
export const TEXT_MAIN = '#e8eaf0'
export const TEXT_MUTED = '#8a91a8'
export const TABLE_HEADER = '#1e2d48'

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar({ page, setPage, timeLeft, timeUp }) {
  const fmt = (s) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  return (
    <nav
      style={{
        background: NAV_BG,
        borderBottom: `2px solid ${PINK}`,
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          height: 56
        }}>
        <span
          style={{ fontWeight: 700, fontSize: 18, color: TEXT_MAIN, letterSpacing: 1, marginRight: 'auto' }}>
          <span style={{ color: PINK }}>Code</span>Comp
        </span>
        {['Instructions', 'Problems', 'Leaderboard'].map((label) => {
          const key = label.toLowerCase()
          const active = page === key
          return (
            <button
              key={key}
              onClick={() => setPage(key)}
              style={{
                background: active ? 'rgba(232,88,122,0.15)' : 'transparent',
                border: 'none',
                color: active ? PINK : TEXT_MUTED,
                fontWeight: active ? 600 : 400,
                fontSize: 15,
                cursor: 'pointer',
                padding: '6px 14px',
                borderRadius: 6,
                transition: 'all 0.15s'
              }}>
              {label}
            </button>
          )
        })}
      </div>

      {/* Timer bar */}
      <div
        style={{
          background: timeUp ? 'rgba(232,88,122,0.15)' : '#1a2235',
          padding: '4px 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
        <span style={{ fontSize: 20 }}>⏰</span>
        {timeUp ? (
          <span style={{ color: PINK, fontWeight: 700, fontSize: 14 }}>TIME UP</span>
        ) : (
          <>
            <span style={{ color: TEXT_MUTED, fontSize: 13 }}>Time remaining:</span>
            <span
              style={{
                color: timeLeft < 300 ? PINK : TEXT_MAIN,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: 'monospace'
              }}>
              {fmt(timeLeft)}
            </span>
            <div style={{ flex: 1, height: 3, background: '#2a3550', borderRadius: 2, overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${(timeLeft / COMPETITION_DURATION) * 100}%`,
                  background: timeLeft < 300 ? PINK : TEAL,
                  transition: 'width 1s linear',
                  borderRadius: 2
                }}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
