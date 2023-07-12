import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { decodeTokenAndExtractRole } from "../services/authService";

function IsConnectAdmin({ children }) {
  const { role } = decodeTokenAndExtractRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role) {
    return null;
  }

  return children;
}

IsConnectAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IsConnectAdmin;
