import React from "react";

import { Container } from "./styles";

const UserMarker = ({ user }) => {
  return (
    <Container>
      <img className="marker" src={user.urlAvatar} alt="Marker" />
      <div>
        <p>{user.name}</p>
        <span>
          {user.street} {user.number}
        </span>
        <p className="city">{user.city}</p>
      </div>
    </Container>
  );
};

export default UserMarker;
