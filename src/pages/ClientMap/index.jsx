import React from "react";

import { Container, Content, TextContent } from "./styles";

import marker from "../../assets/map-marker.svg";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [80, 80],
  iconAnchor: [40, 80],
  popupAnchor: [0, -80],
});

const ClientMap = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <header>
            <img src={marker} alt="Map Marker" />

            <h1>Choose one profile at map</h1>
          </header>

          <footer>
            <strong>Teresina</strong>
            <span>Piauí</span>
          </footer>
        </TextContent>
        <MapContainer
          center={[-5.0738649, -42.779686]}
          zoom={14}
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker icon={mapIcon} position={[-5.0738649, -42.779686]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240}>
              Casa do fulano
            </Popup>
          </Marker>
        </MapContainer>
      </Content>
    </Container>
  );
};

export default ClientMap;
