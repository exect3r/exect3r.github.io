import uniqid from 'uniqid'
import { projects } from '../../projects'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => (
  <section id='projects' className='section projects'>
    <h2 className='section-title'>Projects</h2>

    <div className='projects-grid'>
      {projects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
