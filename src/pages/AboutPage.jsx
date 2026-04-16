import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import profileImage from '../assets/profile.jpeg'
export default function AboutPage({ motionPreset }) {
  return (
    <PageTransition motionPreset={motionPreset} className="about-page">
      <div className="about-layout">
        <div>
          <h2>About</h2>
          <div className="line" />
          <motion.p
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            I am passionate about building technology that helps people, whether through AI, app development, or user-centered design. I love turning complex ideas into clean, intuitive interfaces, and I enjoy presenting and pitching products as much as I enjoy coding them.

When I am not coding or designing, you will probably find me on a badminton court. <span></span>


I am a student researcher, UI/UX designer, and presenter. I have built AI chatbot apps, designed smart pillow interfaces, and won pitch competitions. I am curious, self-motivated, and always looking for the next challenge.


          </motion.p>
          <motion.ul
            className="about-points"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.32 } }}
          >
            <li>Full Scholarship Engineering student at the HKU</li>
            <li>Student researcher at HKU, building an AI chatbot app prototype for a plant humanities project</li>
            <li>UI/UX designer skilled in Figma, user flows, and app interfaces</li>
<li>Presenter and pitch winner (Innowing Pitch Competition Winner & Best Presentation)</li>
<li>Proficient in Python, Swift, React.js, SQL and decent in C++</li>
<li>Tech member and app designer for Resture, a smart pillow for spinal health</li>
<li>Frontend developer for Pill Pal, an AI medication app (GenAI Hackathon 2nd Runner Up)</li>
<li>Apple Swift Student Challenge winner, app showcased at @america</li>
<li>HKU Robocon team member, wrote ROS2-based C++ software for robot control</li>
<li>Head of Logistics for HKU Shun Hing College 60th High Table Dinner</li>
<li>Student Committee member, Careers Team, helping peers with internship preparation</li>

          </motion.ul>
        </div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 32, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1, transition: { delay: 0.25 } }}
        >
         
          <div className="about-portrait-glow" />
          <img src={profileImage} alt="Profile" className="about-portrait-image" />
        </motion.div>
      </div>
    </PageTransition>
  )
}
