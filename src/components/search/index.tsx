import './Search.css'

type Props = {
  value?: string
  onChange?: (v: string) => void
}

export default function Search({ value = '', onChange }: Props) {
  return (
    <div className="sc-search">
      <input
        className="sc-search-input"
        placeholder="Buscar streamers..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label="Buscar streamers"
      />
    </div>
  )
}
