import { HashLink } from 'react-router-hash-link'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => (
  <header className='header center'>
    <h3>
      <HashLink to='/#top' className='link'>
        KA.
      </HashLink>
    </h3>
    <Navbar />
  </header>
)

export default Header
