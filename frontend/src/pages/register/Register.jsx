import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import invisible from "../../assets/invisible.png";
import visible from "../../assets/visible.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { email, password };
    if (password === confirmPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      try {
        await axios.post(`${import.meta.env.VITE_BASE_API}/register`, body);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("use the same password");
    }
  };

  return (
    <div className="container">
      <div className="secondeContainer">
        {" "}
        <form onSubmit={handleSubmit}>
          <h2>S'incrire</h2>
          <label>
            <p>Mail</p>
            <div className="dv-input">
              <input
                id="email"
                name="email"
                className="input-one"
                placeholder="pierre.lafond@gmail.com"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>
          <br />
          <label>
            <p>Mot de passe</p>
            <div className="dv-input">
              <input
                id="password"
                name="password"
                placeholder="*********"
                type={showPassword ? "text" : "password"}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <button
                type="button"
                onClick={handleVisible}
                className="btn-visibleImg"
              >
                {!showPassword ? (
                  <img src={visible} alt="visible" className="visibleImg" />
                ) : (
                  <img src={invisible} alt="visible" className="visibleImg" />
                )}
              </button>
            </div>
          </label>
          <br />
          <label>
            <p>Confirmer votre mot de passe</p>

            <div className="dv-input">
              <input
                name="confirmPassword"
                placeholder="*********"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />{" "}
              <button
                type="button"
                onClick={handleVisible}
                className="btn-visibleImg"
              >
                {!showPassword ? (
                  <img src={visible} alt="visible" className="visibleImg" />
                ) : (
                  <img src={invisible} alt="visible" className="visibleImg" />
                )}
              </button>
            </div>
          </label>
          <br />
          <Link to="/login">
            <button
              className="btn"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Inscription
            </button>
          </Link>

          <p className="register-sentence">Vous avez déjà un compte?</p>
          <Link to="/login">Se connecter</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
