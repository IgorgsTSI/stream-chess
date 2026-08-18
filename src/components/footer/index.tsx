import './Footer.css'

export default function Footer() {
  return (
    <footer className="sc-footer">
      <div className="sc-footer-inner">
        <small>© {new Date().getFullYear()} Stream Chess</small>
      </div>
    </footer>
  )
}
