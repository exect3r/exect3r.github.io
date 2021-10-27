import uniqid from 'uniqid'
import { useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Parser from 'html-react-parser'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { projectDetails } from '../../projects'
import './ProjectPage.css'

const ProjectPage = () => {
  const { id } = useParams()
  const details = projectDetails[id]

  if (!details) return null;

  return (
    <div id={id} className='project-page'>
      <HashLink to='/#top'>
        <ArrowBack fontSize='large' />
      </HashLink>
      <div className='v-center'>
        <h1 className='project-title'>{details.title}</h1>
      </div>
      {details.sections.map((sec) => (
        <section key={uniqid()} className={`project-section ps-${sec.type || '2-1'}`}>
          {sec.entries.map((entry) => {
            if (entry.type === 'text')
              return (
                <span key={uniqid()} className={`project-section-desc pse-${entry.gridW || '0'}-${entry.gridH || '0'}`}>
                  {entry.values.map((value) => (
                    <p key={uniqid()} className='desc-paragraph'>{Parser(value)}</p>
                  ))}
                </span>
              )
            if (entry.type === 'image')
              return (
                <div className={`project-section-img pse-${entry.gridW || '0'}-${entry.gridH || '0'}`}>
                  <img
                    key={uniqid()}
                    src={`${process.env.PUBLIC_URL}/imgs/${entry.src}`}
                    alt={entry.alt}
                    width={entry.width}
                    height={entry.height}
                  />
                  {entry.alt && (<i>{entry.alt}</i>)}
                </div>
              )
            
            return null
          }
          )}
        </section>
      ))}
    </div>
  )
}

export default ProjectPage