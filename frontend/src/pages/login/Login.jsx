import React, { useState } from "react";
import visible from "../../assets/visible.png";
import invisible from "../../assets/invisible.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
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
          <a href="/" className="new-password-link">
            MOT DE PASSE OUBLIÉ ?
          </a>
          <br />
          <br />
          <button className="login-btn" type="submit" onClick={handleSubmit}>
            Inscription
          </button>

          <p className="sentence">Vous avez déjà un compte?</p>
          <a href="/" className="connection-link">
            Connexion
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
