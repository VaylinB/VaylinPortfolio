import { motion } from 'framer-motion'

const map = {
  '/': [
    'orb orb-home-1',
    'orb orb-home-2',
    'orb orb-home-3',
    'orb orb-home-4',
  ],
  '/projects': ['orb orb-projects-1', 'orb orb-projects-2'],
  '/about': ['orb orb-about-1', 'orb orb-about-2'],
  '/contact': ['orb orb-contact-1'],
  '/menu': ['orb orb-menu-1', 'orb orb-menu-2', 'orb orb-menu-3'],
}

export default function GradientOrbs({ route }) {
  const items = map[route] || map['/']

  return (
    <div className="orb-layer" aria-hidden="true">
      {items.map((className, index) => (
        <motion.div
          key={`${route}-${className}`}
          className={className}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 18, 0],
            y: [0, -14, 0],
            rotate: [0, 8, -6, 0],
          }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{
            opacity: { duration: 0.7, delay: index * 0.05 },
            scale: { duration: 0.8 },
            x: { duration: 14 + index * 2, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 11 + index * 2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 18 + index * 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
    </div>
  )
}
