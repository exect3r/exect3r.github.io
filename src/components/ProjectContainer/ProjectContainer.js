import { HashLink } from 'react-router-hash-link'
import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <HashLink to={`/projects/${project.id}#top`}>
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project-description'>{project.description}</p>
      <ul className='project-stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project-stack-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </HashLink>
)

export default ProjectContainer