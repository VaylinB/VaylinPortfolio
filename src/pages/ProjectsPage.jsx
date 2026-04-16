import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal'
import PageTransition from '../components/PageTransition'
import { featuredProjects } from '../data/projects'
import chatImg from '../assets/chat.png'
import nusanImg from '../assets/nusan.png'
import figImg from '../assets/fig.png'
import hackImg from '../assets/hack.png'

export default function ProjectsPage({ motionPreset }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageTransition motionPreset={motionPreset} className="projects-page">
      <div className="title-row">
        <h2>Work</h2>
      </div>

      <p className="projects-intro">
        Displays of some of my competitions, projects, and practices.
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
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
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
        <div className="websites-grid">


          <div className="website-item">
            <img src={chatImg} alt="Chatelier" style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Chatelier (ReactJS)</h4>
            <a href="https://chatelier-eight.vercel.app/" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
          <div className="website-item">
            <img src={nusanImg} alt="Nusantara Carry" style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Nusantara Carry (HTML)</h4>
            <a href="https://nusantara-carry.vercel.app/" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
          <div className="website-item">
            <img src={figImg} alt="Chatelier Figma" style={{width: '100%', height: '300px', objectFit: 'contain', borderRadius: '12px'}} />
            <h4>Chatelier (Figma)</h4>
            <a href="https://carol-margin-62431646.figma.site/reviews" className="project-link" target="_blank" rel="noreferrer">Visit ↗</a>
          </div>
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </PageTransition>
  )
}
