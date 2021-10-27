import uniqid from 'uniqid'
import './Skills.css'

const Skills = () => {
  const skills = [
    'Unity', 'C#', 'C/C++', 'Java', 'Python',
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'NestJS',
    'SQL', 'MongoDB', 'RabbitMQ', 'Hadoop'
  ]

  return (
    <section className='section skills' id='skills'>
      <h2 className='section-title'>Skills</h2>
      <ul className='skills-list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills-list-item btn btn-plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
