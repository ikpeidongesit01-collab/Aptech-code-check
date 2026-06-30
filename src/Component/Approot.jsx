// ─── App Root ─────────────────────────────────────────────────────────────
import { useCallback, useEffect, useState } from 'react'
import Instructions from './Instructions'
import Navbar, { PAGE_BG, TEXT_MAIN } from './Navbar'
import ProblemList from './Problemlist'
import QuestionDetail from './Questiondetail'
import Leaderboard from './leaderboard'
function Approot() {
  const [page, setPage] = useState('instructions')
  const [currentQ, setCurrentQ] = useState(1)
  const [timeLeft, setTimeLeft] = useState(75 * 60)
  const [timeUp, setTimeUp] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true)
      setShowOverlay(true)
      return
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const handleSubmit = useCallback((sub) => {
    setSubmissions((prev) => [...prev, sub])
  }, [])

  const renderPage = () => {
    if (page === 'instructions') return <Instructions setPage={setPage} />
    if (page === 'problems') return <ProblemList setPage={setPage} setCurrentQ={setCurrentQ} />
    if (page === 'question')
      return (
        <QuestionDetail qId={currentQ} setPage={setPage} submissions={submissions} onSubmit={handleSubmit} />
      )
    if (page === 'leaderboard') return <Leaderboard />
    return null
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: PAGE_BG,
        color: TEXT_MAIN,
        fontFamily: 'system-ui, sans-serif'
      }}>
      <Navbar page={page} setPage={setPage} timeLeft={timeLeft} timeUp={timeUp} />
      {showOverlay && <TimeUpOverlay onDismiss={() => setShowOverlay(false)} />}
      {renderPage()}
    </div>
  )
}
export default Approot
