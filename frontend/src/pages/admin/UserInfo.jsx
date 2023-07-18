import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcherUSerById } from "../../services/userService";

function UserInfo() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    fetcherUSerById("users", userId)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container-userInfo">
      {user?.picture ? (
        <img src={user.picture} alt="preview user" />
      ) : (
        <div className="container-userInfo-picture" />
      )}
      <div className="container-userInfo-infos">
        <h3>Prénom : {user.firstname}</h3>
        <h3>Nom : {user.lastname}</h3>
        <h3>Mail : {user.email}</h3>
        <h3>Ville : {user.city}</h3>
        <h3>Code Postal : {user.location}</h3>
        <h3>Genre : {user.gender}</h3>
        <h3>Level : {user.level}</h3>
      </div>
    </div>
  );
}

export default UserInfo;
