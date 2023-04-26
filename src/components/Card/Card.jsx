import React from "react";
import './Card.scss';
import { Link } from 'react-router-dom';
import projets from "../../assets/projets.json";

export default function Card() {
  return(
    <div className="container-Card">
      {projets.map((projet) => {
        return (
          <Link key={projet.id} to={`/Projet/${projet.id}`}>

            <div className="Card">
              <img src={projet.cover} alt={projet.title} />

            </div>
            <p>{projet.title}</p>
          </Link>
        )
    })}
    </div>
  )
};
