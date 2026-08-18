import './empty.css'

type Props = { query?: string }

export default function EmptyState({ query }: Props) {
  return (
    <div className="empty" role="status" aria-live="polite">
      <h3>Nenhum resultado</h3>
      <p>
        Não encontramos streamers{query ? ` para “${query}”` : ''}. Tente outro termo
        ou remova os filtros.
      </p>
    </div>
  )
}
