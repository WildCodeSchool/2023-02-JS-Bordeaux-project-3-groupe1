import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sender, fetcherAllUsers } from "../../services/userService";

function GestionUsers() {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetcherAllUsers("users")
      .then((data) => {
        setUsers(data);
        setActive(data.active);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }

    sender("users", {
      active,
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
        <div className="container-gestion-user">
          <li key={item.id}>{item.email}</li>
          <Link to={`/admin/user/${item.id}`}>
            <button type="button">Information</button>
          </Link>
          {active ? (
            <button type="button" onClick={handleActive}>
              Désactiver
            </button>
          ) : (
            <button type="button" onClick={handleActive}>
              Activer
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default GestionUsers;
