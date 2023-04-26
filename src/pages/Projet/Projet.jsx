import './Projet.scss';
import { useParams } from "react-router-dom";

// projements
import Projets from "../../assets/projets.json";
// Erreur 404
import Error from "../../components/Error/Error";
// Carrousel
import Carrousel from '../../components/Carrousel/Carrousel';
// Tag
//import Tag from '../../components/Tag/Tag';
// etoile note
//import Rate from "../../components/Rate/Rate";


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
              <Carrousel images={proj.pictures}/>
            <div className='flex'>
              <div>
                <h1 className="title">{proj.title}</h1>
                <h2 className="location">{proj.location}</h2>


              </div>

              <div>
                <div className='flex_2'>
                  <p className='hostname'>{proj.host.name}</p>
                  <img className='picture' src={proj.host.picture} alt="pict of host" />
                </div>

              </div>

            </div>

            </div>
  )

  }//Pageproj
}

/*

                <div className="tagContainer">
                  {proj.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>

                                <Rate rating={proj.rating} />
*/