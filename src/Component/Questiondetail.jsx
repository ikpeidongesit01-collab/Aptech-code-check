// ─── Question Detail + Submission ──────────────────────────────────────────
import { useState } from 'react'
import { CARD_BG, PINK, QUESTIONS, TEAL, TEXT_MAIN, TEXT_MUTED } from './Navbar'
function QuestionDetail({ qId, setPage, submissions, onSubmit }) {
  const q = QUESTIONS.find((x) => x.id === qId)
  const [code, setCode] = useState('# Write your solution here\n')
  const [lang, setLang] = useState('python')
  const [submitting, setSubmitting] = useState(false)
  const [lastResult, setLastResult] = useState(null)

  const mySubmissions = submissions.filter((s) => s.qId === qId)

  const handleSubmit = () => {
    setSubmitting(true)
    setTimeout(() => {
      const passed = Math.random() > 0.4
      const result = passed
        ? 'ACCEPTED'
        : ['WRONG ANSWER', 'COMPILE ERROR', 'RUNTIME ERROR'][Math.floor(Math.random() * 3)]
      const sub = { qId, lang, result, time: new Date().toLocaleTimeString() }
      onSubmit(sub)
      setLastResult(result)
      setSubmitting(false)
    }, 1200)
  }

  const statusColor = (r) => {
    if (r === 'ACCEPTED') return TEAL
    return PINK
  }

  const Block = ({ title, children }) => (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontWeight: 700, color: TEXT_MAIN, fontSize: 16, marginBottom: 8 }}>{title}</div>
      {children}
    </div>
  )

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <button
        onClick={() => setPage('problems')}
        style={{
          background: 'none',
          border: 'none',
          color: TEXT_MUTED,
          cursor: 'pointer',
          marginBottom: 16,
          fontSize: 14
        }}>
        ← Back to problems
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Left: Problem Statement */}
        <div style={{ background: CARD_BG, borderRadius: 10, padding: '1.5rem' }}>
          <h2 style={{ color: PINK, fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{q.title}</h2>
          <p style={{ color: TEXT_MUTED, fontSize: 14, marginBottom: '1.5rem' }}>Problem #{q.id}</p>

          <Block title="Description">
            <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.7 }}>{q.description}</p>
          </Block>

          <Block title="Input format">
            <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.7 }}>{q.inputFormat}</p>
          </Block>

          <Block title="Output format">
            <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.7 }}>{q.outputFormat}</p>
          </Block>

          <Block title="Examples">
            {q.examples.map((ex, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div style={{ color: TEXT_MUTED, fontSize: 13, marginBottom: 6 }}>Example {i + 1}</div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 6 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: TEXT_MUTED, marginBottom: 4 }}>Input</div>
                    <div
                      style={{
                        background: '#0d1117',
                        padding: '10px 14px',
                        borderRadius: 6,
                        fontFamily: 'monospace',
                        color: TEXT_MAIN,
                        fontSize: 14
                      }}>
                      {ex.input}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: TEXT_MUTED, marginBottom: 4 }}>Output</div>
                    <div
                      style={{
                        background: '#0d1117',
                        padding: '10px 14px',
                        borderRadius: 6,
                        fontFamily: 'monospace',
                        color: TEXT_MAIN,
                        fontSize: 14
                      }}>
                      {ex.output}
                    </div>
                  </div>
                </div>
                <div style={{ color: TEXT_MUTED, fontSize: 13 }}>{ex.explanation}</div>
              </div>
            ))}
          </Block>
        </div>

        {/* Right: Code Editor + Submit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: CARD_BG, borderRadius: 10, padding: '1.5rem', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12
              }}>
              <div style={{ fontWeight: 700, color: TEXT_MAIN, fontSize: 16 }}>Your solution</div>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                style={{
                  background: '#0d1117',
                  color: TEXT_MAIN,
                  border: '1px solid #2a3550',
                  borderRadius: 6,
                  padding: '4px 10px',
                  fontSize: 13
                }}>
                {['python', 'javascript', 'c', 'java'].map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                height: 280,
                background: '#0d1117',
                color: TEXT_MAIN,
                border: '1px solid #2a3550',
                borderRadius: 6,
                fontFamily: 'monospace',
                fontSize: 13,
                padding: 14,
                resize: 'vertical',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                marginTop: 12,
                width: '100%',
                background: submitting ? '#2a3550' : PINK,
                color: '#fff',
                border: 'none',
                padding: '12px 0',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 700,
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s'
              }}>
              {submitting ? 'Judging…' : 'Submit solution'}
            </button>

            {lastResult && (
              <div
                style={{
                  marginTop: 12,
                  padding: '10px 16px',
                  borderRadius: 8,
                  background: lastResult === 'ACCEPTED' ? 'rgba(34,211,165,0.1)' : 'rgba(232,88,122,0.1)',
                  border: `1px solid ${statusColor(lastResult)}`,
                  color: statusColor(lastResult),
                  fontWeight: 700,
                  fontSize: 15,
                  textAlign: 'center'
                }}>
                {lastResult}
              </div>
            )}
          </div>

          {mySubmissions.length > 0 && (
            <div style={{ background: CARD_BG, borderRadius: 10, padding: '1.5rem' }}>
              <div style={{ fontWeight: 700, color: TEXT_MAIN, fontSize: 15, marginBottom: 10 }}>
                Submission history
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {mySubmissions
                  .slice()
                  .reverse()
                  .map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '6px 12px',
                        background: '#0d1117',
                        borderRadius: 6
                      }}>
                      <span style={{ color: statusColor(s.result), fontWeight: 600, fontSize: 13 }}>
                        {s.result}
                      </span>
                      <span style={{ color: TEXT_MUTED, fontSize: 12 }}>
                        {s.lang} · {s.time}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
