import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <div>
      <div id="footer-container">
        <button className="footer-button" id="footer-home-button"><FontAwesomeIcon icon={faHome}/> Home</button>
        <button className="footer-button" id="footer-add-button"><button id="plus-button">+</button>Adicionar produto</button>
        <button className="footer-button" id="footer-profile-button"><FontAwesomeIcon icon={faUser}/> Perfil</button>
      </div>
    </div>
  );
}
