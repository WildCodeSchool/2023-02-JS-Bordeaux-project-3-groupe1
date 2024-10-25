import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../services/authService";
import { fetcherUSerById } from "../services/userService";

function ChoiceLevelUser({ children }) {
  const { userId, adminRole } = decodeTokenAndExtractRole();
  const [userLevel, setUserLevel] = useState();

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
    if ((userLevel === null || userLevel === 0) && !adminRole) {
      navigate("/level");
    } else if ((userLevel === 1 || userLevel === 2) && adminRole) {
      navigate("/formations");
    }
  }, [userLevel, navigate]);
  return children;
}

ChoiceLevelUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChoiceLevelUser;
