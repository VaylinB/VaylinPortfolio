import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import GradientOrbs from './GradientOrbs'

export default function Layout({ children }) {
  const location = useLocation()
  const isMenu = location.pathname === '/menu'

  return (
    <div className="site-shell">
      <GradientOrbs route={location.pathname} />

      <header className="site-header">
        <Link className="logo" to="/" aria-label="Home">
          <span className="logo-mark">VBT</span>
        </Link>

        <div className="header-actions">
          
          <Link
            className={`menu-button ${isMenu ? 'is-open' : ''}`}
            to={isMenu ? '/' : '/menu'}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
            <span />
          </Link>
        </div>
      </header>

      <motion.main
        className="page-shell"
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </div>
  )
}
