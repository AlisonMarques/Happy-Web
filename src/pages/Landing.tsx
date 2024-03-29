import React from "react";

import { FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logoImg from "../images/logo.svg";

function Landing() {
   return (
      <div id="page-landing">
         <div className="content-wrapper">
            <img src={logoImg} alt="logo" />

            <main>
               <h1>Leve felicidade para o mundo</h1>
               <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
               <strong>Goiás</strong>
               <span>Goiânia</span>
            </div>

            <Link to="/login" className="login">
               <p>Acesso restrito</p>
            </Link>

            <Link to="/app" className="enter-app">
               <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
         </div>
      </div>
   );
}

export default Landing;

/**
 * O Link vai fazer a função de trocar de página
 * sem que precise recarregar-la toda de novo
 * isso vai deixar a app mais leve
 */
