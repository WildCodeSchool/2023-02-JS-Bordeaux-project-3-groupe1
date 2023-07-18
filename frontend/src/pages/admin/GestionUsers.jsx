import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { senderRoleUser, fetcherAllUsers } from "../../services/userService";
import ButtonRoleUser from "./composants/ButtonRoleUser";

function GestionUsers() {
  const [users, setUsers] = useState([]);
  const [roleUser, setRoleUser] = useState();

  useEffect(() => {
    fetcherAllUsers("users")
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [roleUser]);

  const handleActive = (user) => {
    const updateRole = user.role_id === 2 ? 1 : 2;

    senderRoleUser("users/role", user.id, {
      roleUser: updateRole,
    })
      .then((data) => {
        console.warn(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setRoleUser(updateRole);
  };

  return (
    <div className="container-gestion">
      {users.map((user) => (
        <div className="container-gestion-user" key={user.id}>
          <div className="container-infos-user">
            <p>Email de l'utilisateur :</p>
            <li>{user.email}</li>
          </div>
          <div className="container-buttons">
            <ButtonRoleUser handleActive={handleActive} user={user} />
            <Link to={`/admin/user/${user.id}`}>
              <button type="button">Informations</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GestionUsers;
