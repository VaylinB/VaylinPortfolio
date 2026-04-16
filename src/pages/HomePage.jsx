import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function HomePage({ motionPreset }) {
  return (
    <PageTransition motionPreset={motionPreset} className="home-page">
      <div className="hero-block">
        <motion.p
          className="intro-kicker"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          UI / UX DESIGNER · WEB/APP DESIGNER · STUDENT RESEARCHER 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.32, duration: 0.8 } }}
        >
          welcome to
          <br />
          VAYLIN BEATRICE THERON's PORTFOLIO <span></span>
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
        >
          I am a first-year Engineering student at the University of Hong Kong,<br />
           passionate about building technology that solves real problems.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.58 } }}
        >
          <Link className="primary-link" to="/projects">See projects</Link>
          <Link className="secondary-link" to="/about">About Me</Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}
