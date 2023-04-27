import { Link } from 'react-router-dom'
import "./Error.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBomb} from "@fortawesome/free-solid-svg-icons"

export default function Error() {
    return (
        <div className="Error">
        <FontAwesomeIcon icon={faBomb} className='faBomb' />
            <p>Erreur ! Cette page n'existe pas<br></br><br></br>
            <Link to="/">Retourner sur la page d'accueil</Link>
            </p>

        </div>
    )
}
 