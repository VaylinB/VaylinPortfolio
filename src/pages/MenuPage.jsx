import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const links = [
  ['01', 'Home', '/'],
  ['02', 'Work', '/projects'],
  ['03', 'About', '/about'],
  ['04', 'Contact', '/contact'],
]

export default function MenuPage({ motionPreset }) {
  return (
    <PageTransition motionPreset={motionPreset} className="menu-page">
      <div className="menu-layout">
        <div className="menu-label">VAYLIN B. T./ portfolio</div>

        <nav className="menu-nav">
          {links.map(([num, title, href], index) => (
            <motion.div
              className="menu-item"
              key={href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.12 + index * 0.08 } }}
            >
              <span>{num}</span>
              <Link to={href}>{title}</Link>
            </motion.div>
          ))}
        </nav>

        <div className="menu-links-small">
          <a href="https://www.instagram.com/vaylinbeatrice/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://hk.linkedin.com/in/vaylin-beatrice-theron" target="_blank" rel="noreferrer">LinkedIn ↗</a>

        </div>
      </div>
    </PageTransition>
  )
}
