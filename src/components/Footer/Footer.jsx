import { Link } from 'react-router-dom';
import './Footer.scss'
import Logo_2 from './images/logo-aa-infographiste.png'

export default function Footer() {
    return (<>

    <div className='footer'>
    <p><Link to="/"><img src={Logo_2} alt='Logo_AA'/></Link><br></br>
    Adrien Abdalalim - Développeur Web & React</p>
    </div>
    
    </>)
  }
