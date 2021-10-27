import './About.css'

const About = () => (
  <div className='about center'>
    <h1>
      Hi, I am <span className='about-name'>Amin Kchaou.</span>
    </h1>

    <h2 className='about-role'>A Software Engineering Student.</h2>
    <p className='about-desc'>I am a hardworking software engineering student who is passionate about video games (both playing them and making them).
      I am also intrigued by Artificial Intelligence and how advanced it has become.</p>

    <div className='about-contact center'>
      <a href={`${process.env.PUBLIC_URL}/GameDev CV.pdf`}>
        <span type='button' className='btn btn-outline'>
          Resume
        </span>
      </a>
    </div>
  </div>
)

export default About
