import './Card.css'

type Props = {
  username: string
  avatar?: string
  twitch_url?: string
  is_live?: boolean
  highlight?: string
}

function renderHighlighted(text: string, highlight?: string) {
  if (!highlight) return text
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase())
  if (idx === -1) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + highlight.length)
  const after = text.slice(idx + highlight.length)
  return (
    <>
      {before}
      <mark className="sc-highlight">{match}</mark>
      {after}
    </>
  )
}

export default function Card({ username, avatar, twitch_url, is_live, highlight }: Props) {
  return (
    <article className="sc-card" aria-label={`Streamer ${username}`}>
      <img
        className="sc-card-avatar"
        src={avatar || '/src/assets/hero.png'}
        alt={`${username} avatar`}
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement
          if (!t.dataset.fallback) {
            t.dataset.fallback = '1'
            t.src = '/src/assets/hero.png'
          }
        }}
      />

      <div className="sc-card-body">
        <div className="sc-card-title">{renderHighlighted(username, highlight)}</div>
        <div className="sc-card-actions">
          {twitch_url ? (
            <a className="sc-card-link" href={twitch_url} target="_blank" rel="noreferrer" aria-label={`Abrir canal de ${username} no Twitch`}>Ver na Twitch</a>
          ) : (
            <span className="sc-card-no-link">Sem link</span>
          )}
        </div>
      </div>

      <div className="sc-card-status-wrap">
        <span className={`sc-card-status ${is_live ? 'live' : 'offline'}`} aria-hidden />
        <span className="sc-card-status-label">{is_live ? 'Ao vivo' : 'Offline'}</span>
      </div>
    </article>
  )
}
