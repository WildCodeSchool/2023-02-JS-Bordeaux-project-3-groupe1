import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import invisible from "../../assets/invisible.png";
import visible from "../../assets/visible.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleVisible = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { email, password };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}/login`,
        body
      );
      const token = response.data;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-secondeContainer">
        {" "}
        <form onSubmit={handleSubmit}>
          <h2>Se connecter</h2>
          <label>
            <p>Mail</p>
            <div className="login-dv-input">
              <input
                id="email"
                name="email"
                className="input-one"
                placeholder="pierre.lafond@gmail.com"
                type="text"
                value={email}
                onChange={handleInputChange}
              />
            </div>
          </label>
          <br />
          <label>
            <p>Mot de passe</p>
            <div className="login-dv-input">
              <input
                id="password"
                name="password"
                placeholder="*********"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleInputChange}
              />{" "}
              <button
                type="button"
                onClick={handleVisible}
                className="login-btn-visibleImg"
              >
                {!showPassword ? (
                  <img src={visible} alt="visible" className="visibleImg" />
                ) : (
                  <img src={invisible} alt="visible" className="visibleImg" />
                )}
              </button>
            </div>
          </label>
          <Link to="/" className="new-password-link">
            MOT DE PASSE OUBLIÉ ?
          </Link>
          <br />
          <br />
          <button className="login-btn" type="submit" onClick={handleSubmit}>
            Connexion
          </button>
          <p className="sentence">Pas de compte?</p>
          <Link to="/register" className="connection-link">
            Créer un compte
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
