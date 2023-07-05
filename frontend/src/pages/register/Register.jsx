import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import visible from "../../assets/visible.png";
import invisible from "../../assets/invisible.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { email, password };
    if (password === confirmPassword) {
      try {
        await axios.post(`${import.meta.env.VITE_BASE_API}/register`, body);
        toast.success("Utilisateur enregistré 🎉");
        navigate("/profile");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Les deux mots de passe doivent être les mêmes 🥺 ");
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
                  <img src={invisible} alt="invisible" className="visibleImg" />
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
                  <img src={invisible} alt="invisible" className="visibleImg" />
                )}
              </button>
            </div>
          </label>
          <br />
          <button className="btn" type="submit" onClick={() => handleSubmit()}>
            Inscription
          </button>
          <p className="register-sentence">Vous avez déjà un compte?</p>
          <Link to="/login">Se connecter</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
