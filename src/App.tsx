import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Search from './components/search'
import Card from './components/card'
import Footer from './components/footer'
import { fetchStreamers } from './services/chessApi'
import type { Streamer as RemoteStreamer } from './services/chessApi'
import EmptyState from './components/empty'

export default function App() {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<RemoteStreamer[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    fetchStreamers()
      .then((res) => {
        if (!mounted) return
        setList(res)
      })
      .catch((err) => {
        console.error(err)
        if (!mounted) return
        setError('Erro ao carregar streamers')
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const filtered = list.filter((s) => s.username.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <Header />
      <Search value={query} onChange={setQuery} />

      <main id="center">
        <div className="container">
          {loading && <div>Carregando streamers...</div>}
          {error && <div style={{ color: 'red' }}>{error}</div>}

          {!loading && !error && (
            filtered.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              <div className="stream-grid">
                {filtered.map((s) => (
                  <Card key={s.username} {...s} highlight={query} />
                ))}
              </div>
            )
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

