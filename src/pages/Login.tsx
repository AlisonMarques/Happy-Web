import React from "react";

import "../styles/pages/login.css";
import image from "../images/logotipo.svg";

export default function Login() {
   return (
      <div id="page-login">
         <div className="content-wrapper-login">
            <img src={image} alt="logo" />

            <div className="location-login">
               <strong>Goiás</strong>
               <span>Goiânia</span>
            </div>

            <div className="content-login">
               <div className="rectangle">
                  <h1>teste</h1>
               </div>
            </div>
         </div>
      </div>
   );
}
