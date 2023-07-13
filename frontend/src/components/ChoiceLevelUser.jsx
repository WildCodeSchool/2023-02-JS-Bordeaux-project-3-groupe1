import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../services/authService";
import { fetcherUSerById } from "../services/userService";

function ChoiceLevelUser({ children }) {
  const { userId, adminRole } = decodeTokenAndExtractRole();
  const [userLevel, setUserLevel] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetcherUSerById(`users`, userId)
      .then((data) => {
        setUserLevel(data.level);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (userLevel === null && !adminRole) {
      navigate("/levelUser");
    } else if (userLevel === 1 || userLevel === 2) {
      navigate("/formations");
    }
  }, [userLevel, navigate]);
  return children;
}

ChoiceLevelUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChoiceLevelUser;
