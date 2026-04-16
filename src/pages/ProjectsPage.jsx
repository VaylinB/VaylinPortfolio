import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal'
import PageTransition from '../components/PageTransition'
import { featuredProjects } from '../data/projects'
import chat from '../assets/chat.png'
import nusan from '../assets/nusan.png'
import hack from '../assets/hack.png'

export default function ProjectsPage({ motionPreset }) {
  const [isRestureModalOpen, setIsRestureModalOpen] = useState(false);
  const [isPillPalModalOpen, setIsPillPalModalOpen] = useState(false);
  const [isAppleSwiftModalOpen, setIsAppleSwiftModalOpen] = useState(false);
  const [isStudentResearcherModalOpen, setIsStudentResearcherModalOpen] = useState(false);

  const restureProject = featuredProjects.find(p => p.id === 'studio-luma') || {};
  const pillPalProject = featuredProjects.find(p => p.id === 'redline-pay') || {};
  const appleSwiftProject = featuredProjects.find(p => p.id === 'northstar-dashboard') || {};
  const studentResearcherProject = featuredProjects.find(p => p.id === 'ember-travel') || {};

  const openRestureModal = () => {
    setIsRestureModalOpen(true);
  };

  const closeRestureModal = () => {
    setIsRestureModalOpen(false);
  };

  const openPillPalModal = () => {
    setIsPillPalModalOpen(true);
  };

  const closePillPalModal = () => {
    setIsPillPalModalOpen(false);
  };

  const openAppleSwiftModal = () => {
    setIsAppleSwiftModalOpen(true);
  };

  const closeAppleSwiftModal = () => {
    setIsAppleSwiftModalOpen(false);
  };

  const openStudentResearcherModal = () => {
    setIsStudentResearcherModalOpen(true);
  };

  const closeStudentResearcherModal = () => {
    setIsStudentResearcherModalOpen(false);
  };

  return (
    <PageTransition motionPreset={motionPreset} className="projects-page">
      <div className="title-row">
        <h2>Work</h2>
      </div>

      <p className="projects-intro">
        Displays of some of my competitions, projects, and pratices.
        Tap the images to see details. Enjoy!
      </p>

      <div className="project-list">
        {featuredProjects.map((project, index) => (
            <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.08 * index + 0.12 } }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="project-meta-row">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>

            <div 
              className="project-preview"
              style={{ 
                cursor: (project.id === 'studio-luma' || project.id === 'redline-pay' || project.id === 'northstar-dashboard' || project.id === 'ember-travel') ? 'pointer' : 'default' 
              }}
              onClick={project.id === 'studio-luma' ? openRestureModal : project.id === 'redline-pay' ? openPillPalModal : project.id === 'northstar-dashboard' ? openAppleSwiftModal : project.id === 'ember-travel' ? openStudentResearcherModal : undefined}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={{objectFit: 'contain'}}
              />
            </div>

<div className="project-footer">
              <span>{project.year}</span>
              {project.href && project.href !== '#' && (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  Go Visit ↗
                </a>
              )}
            </div>

            <p className="project-summary">{project.summary}</p>
          </motion.article>
        ))}
      </div>
      <div style={{marginTop: '4rem'}} className="websites-designs-bottom">
        <div className="title-row">
          <h2>Websites Designs</h2>
        </div>
        <div className="websites-grid" style={{display: 'flex', gap: '2rem'}}>


          <div className="website-item">
            <img src="chat" alt="Chatelier " style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Chatelier (ReactJS)</h4>
            <a href="https://chatelier-eight.vercel.app/" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
          <div className="website-item">
            <img src="nusan" alt="Nusantara Carry" style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Nusantara Carry (HTML)</h4>
            <a href="https://nusantara-carry.vercel.app/" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
          <div className="website-item">
            <img src="fig" alt="Chatelier Figma" style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Chatelier (Figma)</h4>
            <a href="https://carol-margin-62431646.figma.site/reviews" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
        </div>
      </div>

      {isRestureModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={closeRestureModal}>
          <div style={{
            background: 'rgba(23, 22, 38, 0.95)',
            border: '1px solid rgba(203, 134, 152, 0.28)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 28px 90px rgba(0,0,0,0.42)',
            position: 'relative',
            width: '90vw',
            maxWidth: '500px',
            color: '#f3f1f8',
          }} onClick={(e) => e.stopPropagation()}>
            <button style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '28px',
              color: '#a8a7bb',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '999px',
            }} onClick={closeRestureModal}>
              ×
            </button>
            <img src={restureProject.popupImage || '/src/assets/rest1.png'} alt={restureProject.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '16px',
              marginBottom: '20px',
            }} />
            <div>
              <h3 style={{ color: '#faf7ff', marginBottom: '16px', fontSize: '1.8rem' }}>{restureProject.title}</h3>
              <p style={{ lineHeight: '1.7' }}>{restureProject.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
{isPillPalModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={closePillPalModal}>
          <div style={{
            background: 'rgba(23, 22, 38, 0.95)',
            border: '1px solid rgba(203, 134, 152, 0.28)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 28px 90px rgba(0,0,0,0.42)',
            position: 'relative',
            width: '90vw',
            maxWidth: '500px',
            color: '#f3f1f8',
          }} onClick={(e) => e.stopPropagation()}>
            <button style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '28px',
              color: '#a8a7bb',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '999px',
            }} onClick={closePillPalModal}>
              ×
            </button>
            <img src={pillPalProject.popupImage || '/src/assets/hack1.png'} alt={pillPalProject.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '16px',
              marginBottom: '20px',
            }} />
            <div>
              <h3 style={{ color: '#faf7ff', marginBottom: '16px', fontSize: '1.8rem' }}>{pillPalProject.title}</h3>
              <p style={{ lineHeight: '1.7' }}>{pillPalProject.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
      {isAppleSwiftModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={closeAppleSwiftModal}>
          <div style={{
            background: 'rgba(23, 22, 38, 0.95)',
            border: '1px solid rgba(203, 134, 152, 0.28)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 28px 90px rgba(0,0,0,0.42)',
            position: 'relative',
            width: '90vw',
            maxWidth: '500px',
            color: '#f3f1f8',
          }} onClick={(e) => e.stopPropagation()}>
            <button style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '28px',
              color: '#a8a7bb',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '999px',
            }} onClick={closeAppleSwiftModal}>
              ×
            </button>
            <img src={appleSwiftProject.popupImage || '/src/assets/swift1.jpg'} alt={appleSwiftProject.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '16px',
              marginBottom: '20px',
            }} />
            <div>
              <h3 style={{ color: '#faf7ff', marginBottom: '16px', fontSize: '1.8rem' }}>{appleSwiftProject.title}</h3>
              <p style={{ lineHeight: '1.7' }}>{appleSwiftProject.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
      {isStudentResearcherModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={closeStudentResearcherModal}>
          <div style={{
            background: 'rgba(23, 22, 38, 0.95)',
            border: '1px solid rgba(203, 134, 152, 0.28)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 28px 90px rgba(0,0,0,0.42)',
            position: 'relative',
            width: '90vw',
            maxWidth: '500px',
            color: '#f3f1f8',
          }} onClick={(e) => e.stopPropagation()}>
            <button style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '28px',
              color: '#a8a7bb',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '999px',
            }} onClick={closeStudentResearcherModal}>
              ×
            </button>
            <img src={studentResearcherProject.popupImage || '/src/assets/trans1.jpg'} alt={studentResearcherProject.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'contain',
              borderRadius: '16px',
              marginBottom: '20px',
            }} />
            <div>
              <h3 style={{ color: '#faf7ff', marginBottom: '16px', fontSize: '1.8rem' }}>{studentResearcherProject.title}</h3>
              <p style={{ lineHeight: '1.7' }}>{studentResearcherProject.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  )
}
