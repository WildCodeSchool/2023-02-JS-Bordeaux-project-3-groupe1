import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SendEmailUser() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { email };

    try {
      await axios.post(`${import.meta.env.VITE_BASE_API}/sendEmailUser`, body);
      toast.success("un email à été envoyé! 🎉");
      navigate("/profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="send-container">
      <div className="send-secondeContainer">
        {" "}
        <form onSubmit={handleSubmit}>
          <h2 className="send-h2">réinitialiser votre mot de passe</h2>
          <br />
          <br />
          <p className="send-p">
            Veuillez saisir votre adresse e-mail ci-dessous. Nous vous enverrons
            les instructions pour créer un nouveau mot de passe.
          </p>
          <br />
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
          <br />
          <br />
          <button className="send-btn" type="submit" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendEmailUser;
