import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getToken, getId } from "../../services/auth";
import UserMarker from "../../components/UserMarker";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import Glass from "../../components/Glass";
import GlobalModal from "../../components/GlobalModal";

import {
  Container,
  Header,
  HomeIcon,
  UserIcon,
  Content,
  Map,
  UsersContent,
  MapIcon,
  OutIcon,
  SearchBox,
  SearchIcon,
  UsersBox,
  User,
} from "./styles";

import logo from "../../assets/logo.png";
import marker from "../../assets/marker-pin.svg";
import userPin from "../../assets/user-pin.svg";

import "leaflet/dist/leaflet.css";

import api from "../../services/api";
import UserInfoModal from "../../components/UserInfoModal";
import { getClientsPlusAv, getProvidersPlusAv } from "../../utils/othersInfo";
import EditUserModal from "../../components/EditUserModal";
import {grayscale} from "polished";

const SearchMap = () => {
  const token = getToken();
  const userId = getId();
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [clients, setClients] = useState([]);
  const [providers, setProviders] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleOpenEditModal = () => setEditModalOpen(true);

  const handleCloseEditModal = () => setEditModalOpen(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const sendTo = (route) => history.push(`/${route}`);

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleUserClick = (user) => {
    setCurrentUser(user);
    handleOpenModal();
  };

  const handleEditUser = () => {
    handleOpenEditModal();
  };

  const handleSearch = () => {
    if (searchValue) {
      switch (user.type) {
        case "provider":
          (async () => {
            try {
              const filteredClients = clients.filter((client) =>
                client.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              );

              setClients(filteredClients);
            } catch (error) {
              console.log(error);
            }
          })();
          break;
        case "client":
          (async () => {
            try {
              const filteredProviders = providers.filter((provider) =>
                provider.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              );

              setProviders(filteredProviders);
            } catch (error) {
              console.log(error);
            }
          })();
          break;
        default:
          return;
      }
    } else {
      checkUserType(user.type);
    }
  };

  const mapIcon = Leaflet.icon({
    iconUrl: marker,
    iconSize: [80, 80],
    iconAnchor: [40, 80],
    popupAnchor: [0, -80],
  });

  const checkUserType = (userType) => {
    switch (userType) {
      case "provider":
        (async () => {
          try {
            const response = await Promise.all([
              api.get(`clients`),
              api.get("avaliations"),
            ]);
            setClients(getClientsPlusAv(response[0].data, response[1].data));
          } catch (error) {
            console.log(error);
          }
        })();
        break;
      case "client":
        (async () => {
          try {
            const response = await Promise.all([
              api.get(`providers`),
              api.get("avaliations"),
            ]);
            setProviders(
              getProvidersPlusAv(response[0].data, response[1].data)
            );
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
        checkUserType(user.type);
      } catch (error) {
        console.log(error);
      }
    };

    initUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
      handleSearch()
  },[searchValue])
  return (
    JSON.stringify(user) !== "{}" && (
      <Container>
        <Glass size={90}>
          <Header>
            <img src={logo} alt="Tin Services" />
            <div>
              <button onClick={() => sendTo("dashboard")}>
                <HomeIcon />
              </button>
              <button onClick={() => sendTo("searchmap")}>
                <MapIcon />
              </button>
              <button onClick={handleEditUser}>
                <img src={user.urlAvatar} alt="avatar" />
                {/* <UserIcon /> */}
              </button>
              <button onClick={logOut} className="logout">
                <OutIcon />
              </button>
            </div>
            <GlobalModal
              isOpen={isEditModalOpen}
              onRequestClose={handleCloseEditModal}
            >
              <EditUserModal user={user} />
            </GlobalModal>
          </Header>

          <Content>
            <Map>
              <MapContainer
                center={{ lat: Number(user.lat), lng: Number(user.lng) }}
                zoom={16}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                }}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {user.type === "provider"
                  ? clients.map((client) => (
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
                          minWidth={230}
                          maxWidth={230}
                        >
                          <UserMarker user={client} />
                        </Popup>
                      </Marker>
                    ))
                  : providers.map((provider) => (
                      <>
                        <Marker
                          key={provider.id}
                          icon={Leaflet.icon({
                            iconUrl: marker,
                            iconSize: [80, 80],
                            iconAnchor: [40, 80],
                            popupAnchor: [0, -80],
                          })}
                          position={[
                            Number(provider["lat"]),
                            Number(provider["lng"]),
                          ]}
                        >
                          <Popup
                            closeButton={false}
                            minWidth={230}
                            maxWidth={230}
                          >
                            <UserMarker user={provider} />
                          </Popup>
                        </Marker>
                      </>
                    ))}
                <Marker
                  key={user.id}
                  icon={Leaflet.icon({
                    iconUrl: userPin,
                    iconSize: [80, 80],
                    iconAnchor: [40, 80],
                    popupAnchor: [0, -80],
                  })}
                  position={[user.lat, user.lng]}
                >
                  <Popup closeButton={false} minWidth={180} maxWidth={180}>
                    <UserMarker user={user} />
                  </Popup>
                </Marker>
              </MapContainer>
            </Map>
            <UsersContent>
              <SearchBox>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Pesquise por nome..."
                />
              </SearchBox>
              <UsersBox>
                {user.type === "provider"
                  ? clients.map((client) => (
                      <User key={client.id}>
                        <div className="user-avatar">
                          <img src={client.urlAvatar} alt="Avatar" />
                            <ReactStars
                                edit={false}
                                value={client.avaliations.reduce(
                                            (score, avaliation) => score + avaliation.score,
                                            0
                                )}
                                color="#444"
                                count={5}
                                size={18}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="user-description">
                          <h3>{client.name}</h3>
                          <span>{client.type}</span>
                          <h4>Contato</h4>
                          <span>{client.email}</span>
                        </div>
                        <button onClick={() => handleUserClick(client)}>
                          <SearchIcon />
                        </button>
                      </User>
                    ))
                  : providers.map((provider) => (
                      <User key={provider.id}>
                        <div className="user-avatar">
                          <img src={provider.urlAvatar} alt="Avatar" />
                            <ReactStars
                                edit={false}
                                value={provider.avaliations.reduce(
                                    (score, avaliation) => score + avaliation.score,
                                    0
                                )}
                                color="#444"
                                count={5}
                                size={18}
                                isHalf={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="user-description">
                          <h3>{provider.name}</h3>
                          <span>{provider.type}</span>
                          <h4>Description</h4>
                          <span>{provider.desc}</span>
                        </div>
                        <button onClick={() => handleUserClick(provider)}>
                          <SearchIcon />
                        </button>
                      </User>
                    ))}
              </UsersBox>
            </UsersContent>
          </Content>
        </Glass>
        <GlobalModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <UserInfoModal
            user={currentUser}
            clients={clients}
            providers={providers}
          />
        </GlobalModal>
      </Container>
    )
  );
};

export default SearchMap;
