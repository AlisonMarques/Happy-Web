import React from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

// icone que marca o mapa
const mapIcon = leaflet.icon({
   iconUrl: mapMarkerImg,

   iconSize: [58, 68],

   //vai estar indicando qual a posição do ícone que representa o ponto no mapa
   // qual parte do ícone está apontando no mapa
   iconAnchor: [29, 68],

   // posicionando a mensagem do popup
   popupAnchor: [170, 2],
});

function OrphanagesMap() {
   return (
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMarkerImg} alt="map-marker" />

               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
               <strong>Goiás</strong>
               <span>Goiânia</span>
            </footer>
         </aside>

         <Map
            center={[-16.6638255, -49.416106]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
         >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker icon={mapIcon} position={[-16.6638255, -49.416106]}>
               <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
               >
                  Lar das meninas
                  <Link to="/orphanages/1">
                     <FiArrowRight size={20} color="#FFF" />
                  </Link>
               </Popup>
            </Marker>
         </Map>

         <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
         </Link>
      </div>
   );
}

export default OrphanagesMap;
