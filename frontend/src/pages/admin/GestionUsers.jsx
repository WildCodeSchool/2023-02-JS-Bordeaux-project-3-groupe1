import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { senderRoleUser, fetcherAllUsers } from "../../services/userService";
import ButtonRoleUser from "./composants/ButtonRoleUser";

function GestionUsers() {
  const [users, setUsers] = useState([]);
  const [roleUser, setRoleUser] = useState(2);

  useEffect(() => {
    fetcherAllUsers("users")
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleActive = (item) => {
    if (roleUser === 2) {
      setRoleUser(1);
    } else {
      setRoleUser(2);
    }

    senderRoleUser("users/role", item, {
      roleUser,
    })
      .then((data) => {
        console.warn(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-gestion">
      {users.map((item) => (
        <div className="container-gestion-user" key={item.id}>
          <li>{item.email}</li>
          <ButtonRoleUser handleActive={handleActive} item={item} />
          <Link to={`/admin/user/${item.id}`}>
            <button type="button">Informations</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GestionUsers;
