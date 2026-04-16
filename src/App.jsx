import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MenuPage from './pages/MenuPage'

const pageMotion = {
  initial: { opacity: 0, y: 28, filter: 'blur(12px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -22,
    filter: 'blur(14px)',
    transition: { duration: 0.45, ease: [0.64, 0, 0.78, 0] },
  },
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage motionPreset={pageMotion} />} />
          <Route path="/projects" element={<ProjectsPage motionPreset={pageMotion} />} />
          <Route path="/about" element={<AboutPage motionPreset={pageMotion} />} />
          <Route path="/contact" element={<ContactPage motionPreset={pageMotion} />} />
          <Route path="/menu" element={<MenuPage motionPreset={pageMotion} />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
