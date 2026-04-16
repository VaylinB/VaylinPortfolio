import { motion } from 'framer-motion'

export default function PageTransition({ motionPreset, className = '', children }) {
  return (
    <motion.section
      className={`page ${className}`.trim()}
      variants={motionPreset}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  )
}
