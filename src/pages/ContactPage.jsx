import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function ContactPage({ motionPreset }) {
  return (
    <PageTransition motionPreset={motionPreset} className="contact-page">
      <h2>Contact</h2>
      <div className="line" />

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <div className="contact-card">
          <span className="contact-heading">Mail</span>
          <a href="mailto:hello@yourportfolio.com">vaylinb@gmail.com</a>
          <span></span>
          <a className="contact-button" href="mailto:vaylinb@gmail.com"> Let’s work together</a>
        </div>

        <div className="contact-card">
          <span className="contact-heading">Social</span>
          <a href="https://www.instagram.com/vaylinbeatrice" target="_blank" rel="noreferrer">Instagram ↗</a>
  
          <a href="https://hk.linkedin.com/in/vaylin-beatrice-theron" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </motion.div>
    </PageTransition>
  )
}
