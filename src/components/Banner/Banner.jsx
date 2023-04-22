import { NavLink } from 'react-router-dom'
import './Banner.scss'
import logo_AA from './images/logo-aa-info-texte.png'

export default function Header() {
  return (<>
    <div className='header'>
    <NavLink to="/"><img src={logo_AA} alt='Logo_AA'/></NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/Apropos">A propos</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </div>
    </>)
}