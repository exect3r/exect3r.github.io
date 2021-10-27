import { useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import ProjectPage from './components/ProjectPage/ProjectPage'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const location = useLocation()

  return (
    <div id='top' className={`${themeName} app`}>
      <div className='background' />
      <Header />

      <main>
        <TransitionGroup>
          <CSSTransition
            timeout={400}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path='/'>
                <div className='profile'>
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                </div>
              </Route>
              <Route path='/projects/:id'>
                <ProjectPage />
              </Route>
              <Route path='*'>
                error
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <ScrollToTop />
    </div>
  )
}

export default App
