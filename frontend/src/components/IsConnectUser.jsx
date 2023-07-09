import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../services/authService";

function IsConnectUser({ children }) {
  const { userRole } = decodeTokenAndExtractRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRole) {
      navigate("/");
    }
  }, [userRole, navigate]);

  if (!userRole) {
    return null;
  }

  return children;
}

IsConnectUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsConnectUser;
