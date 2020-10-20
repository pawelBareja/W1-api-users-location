import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

// style
import "../style/map.css";

// const position = [51.505, -0.09];

const Maps = ({ position }) => {
  return (
    <Map center={position} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default Maps;
