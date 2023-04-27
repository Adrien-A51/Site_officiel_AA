import './Projet.scss';
import { useParams } from "react-router-dom";

// projements
import Projets from "../../assets/projets.json";
// Erreur 404
import Error from "../../components/Error/Error";
// Carrousel               <Carrousel images={proj.pictures}/>
//import Carrousel from '../../components/Carrousel/Carrousel';


export default function Pageproj () {
  const { id } = useParams();
  const proj = Projets.find((projet) => projet.id === id);
  if (proj === undefined || proj === null) {
    return <Error />
  }//if
  else{
 
  return (
            <div className="container">
              <div key={proj.id} to={`/Projet/${proj.id}`}></div>

            <div className='flex'>
              <div>
                <h1 className="title">{proj.title}</h1>
                <h2 className="location">{proj.location}</h2>
              </div>

            </div>

            <div className='flex'>
              <div>
                <h1 className="title">{proj.title}</h1>
                <h2 className="location">{proj.location}</h2>
              </div>

            </div>

            </div>

            
  )

  }//Pageproj
}