import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../services/authService";

function IsConnectAdmin({ children }) {
  const { adminRole } = decodeTokenAndExtractRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminRole) {
      navigate("/");
    }
  }, [adminRole, navigate]);

  if (!adminRole) {
    return null;
  }

  return children;
}

IsConnectAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsConnectAdmin;
