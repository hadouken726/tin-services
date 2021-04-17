import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

import { getToken, getId } from "../../services/auth";

import Stars from "../../components/Stars";

import logo from "../../assets/logo.png";

import marker from "../../assets/marker-pin.svg";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import api from "../../services/api";

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [80, 80],
  iconAnchor: [40, 80],
  popupAnchor: [0, -80],
});

const SearchMap = () => {
  const token = getToken();
  const userId = getId();
  const [user, setUser] = useState({});
  const [clients, setClients] = useState([]);
  const [providers, setProviders] = useState([]);
  const history = useHistory();

  const checkUserType = (userType) => {
    switch (userType) {
      case "provider":
        (async () => {
          try {
            const response = await api.get(`clients`, {
              headers: { Authorization: "Bearer " + getToken() },
            });

            setClients(response.data);
          } catch (error) {
            console.log(error);
          }
        })();
        break;
      case "client":
        (async () => {
          try {
            const response = await api.get(`providers`, {
              headers: { Authorization: "Bearer " + getToken() },
            });

            setProviders(response.data);
          } catch (error) {
            console.log(error);
          }
        })();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }

    const initUser = async () => {
      try {
        const response = await api.get(`users/${userId}`, {
          headers: { Authorization: "Bearer " + getToken() },
        });

        const user = response.data;
        setUser(user);
        console.log(user);
        console.log("User Location: " + Number(user.lat), Number(user.lng));
        checkUserType(user.type);
      } catch (error) {
        console.log(error);
      }
    };

    initUser();
  }, []);

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
              center={{ lat: -23.977974, lng: -46.307671 }}
              zoom={14}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {user.type === "provider"
                ? clients.map(
                    (client) => (
                      console.log(client["lat"], client["lng"]),
                      (
                        <Marker
                          key={client.id}
                          icon={mapIcon}
                          position={[
                            Number(client["lat"]),
                            Number(client["lng"]),
                          ]}
                        >
                          <Popup
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                          >
                            Casa do fulano
                          </Popup>
                        </Marker>
                      )
                    )
                  )
                : providers.map(
                    (provider) => (
                      console.log(provider["lat"], provider["lng"]),
                      (
                        <Marker
                          key={provider.id}
                          icon={mapIcon}
                          position={[
                            Number(provider["lat"]),
                            Number(provider["lng"]),
                          ]}
                        >
                          <Popup
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                          >
                            Casa do fulano
                          </Popup>
                        </Marker>
                      )
                    )
                  )}
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
              {user.type === "provider"
                ? clients.map((client) => (
                    <User key={client.id}>
                      <div className="user-avatar">
                        <img src={client.urlAvatar} alt="Avatar" />
                        <Stars />
                      </div>
                      <div className="user-description">
                        <h3>{client.name}</h3>
                        <span>{client.type}</span>
                        <h4>Contato</h4>
                        <span>{client.email}</span>
                      </div>
                    </User>
                  ))
                : providers.map((provider) => (
                    <User key={provider.id}>
                      <div className="user-avatar">
                        <img src={provider.urlAvatar} alt="Avatar" />
                        <Stars />
                      </div>
                      <div className="user-description">
                        <h3>{provider.name}</h3>
                        <span>{provider.type}</span>
                        <h4>Description</h4>
                        <span>{provider.desc}</span>
                      </div>
                    </User>
                  ))}
            </UsersBox>
          </UsersContent>
        </Content>
      </Glass>
    </Container>
  );
};

export default SearchMap;
