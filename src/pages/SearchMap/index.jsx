import React from "react";
import Glass from "../../components/Glass";
import {
  Container,
  Header,
  HomeIcon,
  UserIcon,
  Content,
  Map,
  UsersContent,
  SearchBox,
  SearchIcon,
  UsersBox,
  User,
} from "./styles";

import Stars from "../../components/Stars";

import logo from "../../assets/logo.png";
import avatarMarcelo from "../../assets/avatar-marcelo.svg";

import marker from "../../assets/marker-pin.svg";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [80, 80],
  iconAnchor: [40, 80],
  popupAnchor: [0, -80],
});

const SearchMap = () => {
  return (
    <Container>
      <Glass size={90}>
        <Header>
          <img src={logo} alt="Tin Services" />
          <div>
            <button>
              <HomeIcon />
            </button>
            <button>
              <UserIcon />
            </button>
          </div>
        </Header>

        <Content>
          <Map>
            <MapContainer
              center={[-5.0738649, -42.779686]}
              zoom={14}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker icon={mapIcon} position={[-5.0738649, -42.779686]}>
                <Popup closeButton={false} minWidth={240} maxWidth={240}>
                  Casa do fulano
                </Popup>
              </Marker>
            </MapContainer>
          </Map>
          <UsersContent>
            <SearchBox>
              <input type="text" />
              <button>
                <SearchIcon />
              </button>
            </SearchBox>
            <UsersBox>
              <User>
                <div className="user-avatar">
                  <img src={avatarMarcelo} alt="Avatar" />
                  <Stars />
                </div>
                <div className="user-description">
                  <h3>User Name</h3>
                  <span>Category</span>
                  <h4>Description</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis veniam ratione architecto culpa aut, quibusdam
                    delectus, itaque.
                  </span>
                </div>
              </User>

              <User>
                <div className="user-avatar">
                  <img src={avatarMarcelo} alt="Avatar" />
                  <Stars />
                </div>
                <div className="user-description">
                  <h3>User Name</h3>
                  <span>Category</span>
                  <h4>Description</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis veniam ratione architecto culpa aut, quibusdam
                    delectus, itaque.
                  </span>
                </div>
              </User>

              <User>
                <div className="user-avatar">
                  <img src={avatarMarcelo} alt="Avatar" />
                  <Stars />
                </div>
                <div className="user-description">
                  <h3>User Name</h3>
                  <span>Category</span>
                  <h4>Description</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis veniam ratione architecto culpa aut, quibusdam
                    delectus, itaque.
                  </span>
                </div>
              </User>

              <User>
                <div className="user-avatar">
                  <img src={avatarMarcelo} alt="Avatar" />
                  <Stars />
                </div>
                <div className="user-description">
                  <h3>User Name</h3>
                  <span>Category</span>
                  <h4>Description</h4>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis veniam ratione architecto culpa aut, quibusdam
                    delectus, itaque.
                  </span>
                </div>
              </User>
            </UsersBox>
          </UsersContent>
        </Content>
      </Glass>
    </Container>
  );
};

export default SearchMap;
