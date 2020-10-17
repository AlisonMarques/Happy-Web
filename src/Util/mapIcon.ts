import Leaflet from "leaflet";

import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
   // icone que marca o mapa
   iconUrl: mapMarkerImg,

   iconSize: [58, 68],

   //vai estar indicando qual a posição do ícone que representa o ponto no mapa
   // qual parte do ícone está apontando no mapa
   iconAnchor: [29, 68],

   // posicionando a mensagem do popup
   popupAnchor: [0, -60],
});

export default mapIcon;
