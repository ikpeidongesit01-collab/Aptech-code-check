// ─── Instructions Page ─────────────────────────────────────────────────────
import { CARD_BG, PINK, TEAL, TEXT_MAIN, TEXT_MUTED } from './Navbar'
function Instructions({ setPage }) {
  const Section = ({ color, title, children }) => (
    <div
      style={{
        background: CARD_BG,
        borderLeft: `4px solid ${color}`,
        borderRadius: '0 10px 10px 0',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
      <div style={{ fontWeight: 700, fontSize: 17, color: TEXT_MAIN, marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  )
  const Bullet = ({ children }) => (
    <div style={{ display: 'flex', gap: 10, marginBottom: 8, color: TEXT_MUTED, fontSize: 15 }}>
      <span style={{ marginTop: 2 }}>•</span>
      <span>{children}</span>
    </div>
  )
  const Keyword = ({ color, children }) => <span style={{ color, fontWeight: 700 }}>{children}</span>

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ color: PINK, fontSize: 34, fontWeight: 800, marginBottom: 6 }}>
        Competition Instructions
      </h1>
      <p style={{ color: TEXT_MUTED, marginBottom: '2.5rem' }}>Read carefully before you begin.</p>

      <Section color={TEAL} title="Duration">
        <div style={{ color: TEXT_MUTED, fontSize: 15 }}>
          This competition lasts <Keyword color={TEXT_MAIN}>1 hour and 15 minutes</Keyword>. The timer will
          start at the time announced by the organizer — check the countdown bar above. Manage your time
          wisely.
        </div>
      </Section>

      <Section color={TEAL} title="Questions">
        <Bullet>
          There are <Keyword color={TEXT_MAIN}>2 questions</Keyword> available. You are expected to attempt{' '}
          <Keyword color={TEXT_MAIN}>both</Keyword>.
        </Bullet>
        <Bullet>Click on a question title to see the full problem statement.</Bullet>
      </Section>

      <Section color="#e8a058" title="Submissions">
        <Bullet>
          You can <Keyword color={TEXT_MAIN}>paste your code</Keyword> directly into the editor on the
          question page.
        </Bullet>
        <Bullet>
          Alternatively, you can <Keyword color={TEXT_MAIN}>upload your code file</Keyword> (.py, .js, .c,
          .java).
        </Bullet>
        <Bullet>Select the correct programming language before submitting.</Bullet>
        <Bullet>
          You may submit <Keyword color={TEXT_MAIN}>multiple times</Keyword>. Each submission is tested and
          you will see the result immediately.
        </Bullet>
      </Section>

      <Section color={PINK} title="Rules">
        <Bullet>
          You are <Keyword color={PINK}>NOT allowed</Keyword> to access the internet during this competition.
        </Bullet>
        <Bullet>All solutions are tested automatically against hidden test cases.</Bullet>
        <Bullet>
          A result of <Keyword color={TEAL}>ACCEPTED</Keyword> means all test cases passed.
        </Bullet>
        <Bullet>
          A result of <Keyword color={PINK}>WRONG ANSWER</Keyword> means your output doesn't match expected
          output.
        </Bullet>
        <Bullet>
          A result of <Keyword color={PINK}>COMPILE ERROR</Keyword> or{' '}
          <Keyword color={PINK}>RUNTIME ERROR</Keyword> means your code has a bug.
        </Bullet>
        <Bullet>Academic honesty is expected. Do your own work.</Bullet>
      </Section>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={() => setPage('problems')}
          style={{
            background: PINK,
            color: '#fff',
            border: 'none',
            padding: '14px 40px',
            borderRadius: 8,
            fontSize: 17,
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: 0.5
          }}>
          View Problems →
        </button>
      </div>
    </div>
  )
}
export default Instructions
