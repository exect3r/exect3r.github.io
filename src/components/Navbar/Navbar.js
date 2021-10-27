import { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <nav className='center nav'>
      <ul
        className='nav-list'
      >
        <li className='nav-list-item'>
          <HashLink
            to='/#projects'
            className='link link-nav'
          >
            Projects
          </HashLink>
        </li>

        <li className='nav-list-item'>
          <HashLink
            to='/#skills'
            className='link link-nav'
          >
            Skills
          </HashLink>
        </li>

        <li className='nav-list-item'>
          <HashLink
            to='/#contact'
            className='link link-nav'
          >
            Contact
          </HashLink>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn-icon nav-theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  )
}

export default Navbar
