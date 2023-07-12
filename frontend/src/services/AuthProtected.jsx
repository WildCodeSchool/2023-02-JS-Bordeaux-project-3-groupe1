import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export default function AuthProtected({ children, roles }) {
  const [access, setAccess] = useState(null);
  const navigate = useNavigate();

  const protectedRoute = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: `${import.meta.env.VITE_BASE_API}/users/auth`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setAccess(result.data.token.role);
      })
      .catch(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    if (!roles.includes(access)) {
      navigate("/");
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
