import React from 'react';
import './App.css';
import '../src/css/style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHome, faBook, faBoxOpen, faPenNib, faPaintBrush, faEnvelope, faIdCard,  } from '@fortawesome/free-solid-svg-icons'

function App() {
  const active = 'home'
  return (
    <div>
      <div className="menu col-2 p-0 rounded">
        <ul className="nav flex-column nav-fill">
          {/* Home */}
          <li className={active === 'home' ? "active" : ""} id="home">
            <Link to="/" className="nav-link" href="/"><FontAwesomeIcon icon={faHome}/><p>Home</p></Link>
          </li>
          {/* Design Editorial */}
          <li id="design-edit" className={active === 'design-edit' ? 'active' : ""}>
            <Link to="/design_editorial" className="nav-link"><FontAwesomeIcon icon={faBook}/><p>Design Editorial</p></Link>
          </li>
          {/*  Design de Embalagens */}
          <li id="design-emb" className={active === 'design-emb' ? 'active' : ""}>
            <a className="nav-link" href="/design-embalagens"><FontAwesomeIcon icon={faBoxOpen}/><p>Design de Emb.</p></a>
          </li>
          {/* Identidade Visual */}
          <li id="ident-visual" className={active === 'ident-visual' ? 'active' : ""}>
            <a className="nav-link" href="/identidade-visual"><FontAwesomeIcon icon={faPenNib}/><p>Identidade Visual</p></a>
          </li>
          {/* // Ilustrações */}
          <li id="ilust" className={active === 'ilust' ? 'active' : ""}>
            <a className="nav-link" href="/ilustracoes"><FontAwesomeIcon icon={faPaintBrush}/><p>Ilustrações</p></a>
          </li>
          {/* // Contato */}
          <li id="contact" className={active === 'contact' ? 'active' : ""}>
            <a className="nav-link" href="/contato"><FontAwesomeIcon icon={faEnvelope}/><p>Contato</p></a>
          </li>
          {/* // Sobre mim */}
          <li id="about" className={active === 'about' ? 'active' : ""}>
            <a className="nav-link" href="/about"><FontAwesomeIcon icon={faIdCard}/><p>Sobre Mim</p></a>
          </li>
          {/* // Facebook */}
          <li id="facebook">
            <a className="nav-link" href="https://www.facebook.com/SammyAlvesCoutinho"><FontAwesomeIcon icon={faFacebookSquare}/><p>Facebook</p></a>
          </li>
          {/* // Instagram */}
          <li id="insta">
            <a className="nav-link" href="https://www.instagram.com/samyzera_/"><FontAwesomeIcon icon={faInstagram}/><p>Instagram</p></a>
          </li>
          <li id="whats">
            <a className="nav-link" href="https://api.whatsapp.com/send?phone=5511945457051&text=Ol%C3%A1!%20Gostaria%20de%20ver%20mais%20sobre%20o%20seu%20trabalho!">
            <FontAwesomeIcon icon={faWhatsapp}/><p>whatsapp</p></a>
          </li>
        </ul>
      </div>
    </div>
      
    
  );
}

export default App;
