import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchUserWithToken } from "./userService";

export default function AuthProtected({ children, roles }) {
  const [access, setAccess] = useState(null);
  const navigate = useNavigate();

  const protectedRoute = () => {
    fetchUserWithToken()
      .then((result) => {
        setAccess(result.token.role);
      })
      .catch(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    if (access !== null) {
      if (!roles.includes(access)) {
        console.info("You are not allowed to", access);
        navigate("/");
      }
    }
  }, [access]);

  useEffect(() => {
    protectedRoute();
  }, []);

  return access && roles.includes(access) ? children : null;
}

AuthProtected.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.arrayOf(PropTypes.string),
};

AuthProtected.defaultProps = {
  children: null,
  roles: [],
};
