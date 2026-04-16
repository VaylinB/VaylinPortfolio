import { rest, rest1 } from './rest.js'
import { swift, swift1 } from './swift.js'
import { trans, trans1 } from './trans.js'
import { hack, hack1 } from './hack.js'
export const featuredProjects = [
  {
    id: 'studio-luma',
    title: 'Resture',
    category: 'Competition',
    year: '2026',
    href: 'https://innoacademy.engg.hku.hk/pitching_2026/',
    summary: 'Our project, Resture, is a smart posture correction pillow that integrates ergonomic design with posture-monitoring technology. Won HKD$100,000 funding by Innowing.',
    popupImage: rest1,
    detailedDescription: `I’m proud to share that, together with my team —Kate Melody Wiliem ,Eden winner Gozali ,Jessica Ou ,Lucy Tansi , and Joyce Chan — we were awarded Best Presenter (HK$1,000) and Best Proposal (HK$1,200) at the InnoWing Pitch Competition, and selected as one of the winning teams to advance toward potential HK$100,000 in funding support.

Our project, Resture, is a smart posture correction pillow that integrates ergonomic design with posture-monitoring technology. Designed to address the growing issue of poor posture in modern lifestyles, Resture supports proper spinal alignment while delivering real-time feedback to encourage sustainable behavioral change. Our focus was on building a solution that is not only technically feasible, but also intuitive, accessible, and impactful from a user perspective.

I had the opportunity to present alongside Lucy, and contributed to the project through UI/UX design and by developing the end-to-end product flow and system logic. This involved translating complex ideas into a clear user journey while ensuring alignment between design, functionality, and technical feasibility.`,
    image: rest,
  },
  {
    id: 'redline-pay',
    title: 'Pill Pal',
    category: 'Hackathon',
    year: '2025',
    href: 'https://commoncore.hku.hk/students/student-awards/',
    summary: 'I took part building Pill Pal, an AI-powered medication adherence app, during a GenAI Hackathon. Our team placed 2nd Runner Up and won HKD$2,000.',
    popupImage: hack1,
    detailedDescription: `After an intense week of sleepless nights, countless iterations, and coffee-fueled brainstorming sessions, our team, Beauties and the Beast proudly won 🥉 3rd Place (Bronze) in Track 2: Resilient & Adaptable Communities at The 2025 Hong Kong Inter-University GenAI Hackathon for Sustainable Development Goals!
I developed the frontend using SwiftUI, designed intuitive UI flows for smart reminders and pill recognition, and collaborated closely with teammates under tight deadlines.
Our project began with a simple, painful insight:
In Hong Kong, thousands of elderly patients are hospitalized each year simply because they forget to take their medications. Many live alone, without caregivers to remind them.

We asked ourselves:
👉 How can AI help make sure that a missed pill doesn't become an emergency?

And that's how Pill Pal was born. An AI-powered mobile app that helps older adults stay on track with their prescriptions, by combining smart reminders, visual recognition of pills, and personalized insights powered by LLMs.

The journey wasn't easy. There were nights when the OCR didn't read the labels correctly, the UI crashed, or we questioned if our idea was even feasible. But we kept going by debugging, testing, and refining until everything finally came together.

We spent days rehearsing our pitch, debating every slide, refining every transition. By the finals, one judge told us it was "the best presentation of the year", and another even encouraged us to apply to Y Combinator. Hearing that made every late night worth it.`,
    image: hack,
  },
  {
    id: 'northstar-dashboard',
    title: 'Apple Swift Challenge',
    category: 'Competition',
    year: '2024',
    href: '#',
    summary: 'I created a science simulation application for under privileged students using SwiftUI playgrounds. Chosen by Apple developers to present @america.',
    popupImage: swift1,
    detailedDescription: `Trained with Apple developers to design and build a lab simulation app aimed at supporting less privileged students in accessing practical learning experiences. The app provides virtual lab environments to help students develop hands-on skills despite resource limitations. Received recognition for the project through the program and had the opportunity to present the work at @america, showcasing the impact of technology in promoting educational equity.`,
    image: swift,
  },
  {
    id: 'ember-travel',
    title: 'Student Researcher',
    category: 'Internship',
    year: '2024',
    href: 'https://moss-drop-81674722.figma.site/',
    summary: 'I co-developed In Translation website, with AI chatbot integrated, through a collaboration between The University of Hong Kong and Transilvania University of Brașov.',
    popupImage: trans1,
    detailedDescription: `Focused on AI-assisted storytelling and interactive experience design, combining cultural and ecological research with technical development. Contributed to concept development, creating chat bots, presentation creation, and full prototype coding, including a chatbot supported by 5,000+ images. Helped transform interdisciplinary research into an interactive bilingual app exploring memory, translation, and adaptation.`,
    image: trans,
  }
]
