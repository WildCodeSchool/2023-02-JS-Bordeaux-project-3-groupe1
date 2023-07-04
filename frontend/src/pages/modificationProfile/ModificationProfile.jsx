import { useState } from "react";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import AppareilPhoto from "../../assets/pictures/appareil_photo.png";
import DragAndDrop from "../../components/dropFile/DragAndDrop ";
import { sender } from "../../services/userService";

function ModificationPage() {
  const [picture, setPicture] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [gender, setGender] = useState("Masculin");

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "lastname":
        setLastname(value);
        break;
      case "firstname":
        setFirstname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "city":
        setCity(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "birthdayDate":
        setBirthdayDate(value);
        break;
      case "gender":
        setGender(value);
        break;
      default:
    }
  };

  const handleSave = () => {
    const valuesUser = {
      lastname,
      firstname,
      email,
      city,
      location,
      birthdayDate,
      gender,
      picture,
    };

    sender("users", {
      ...valuesUser,
    })
      .then((data) => {
        console.warn(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <div className="photoLocation">
        <DragAndDrop setPicture={setPicture} />
        <img className="camera" src={AppareilPhoto} alt="appareil" />
      </div>
      <div className="firstBlocInput">
        <label className="denomination" htmlFor="name-user">
          Nom
        </label>
        <input
          className="inputModificationProfile"
          type="text"
          placeholder="Lafond"
          name="lastname"
          value={lastname}
          onChange={onChange}
        />
      </div>
      <div className="secondBlocInput">
        <label className="denomination" htmlFor="first-name-user">
          Prénom
        </label>
        <input
          className="inputModificationProfile"
          type="text"
          placeholder="Pierre"
          name="firstname"
          value={firstname}
          onChange={onChange}
        />
      </div>
      <div className="thirdBlocInput">
        <label className="denomination" htmlFor="mail">
          Mail
        </label>
        <input
          className="inputModificationProfile"
          id="email"
          type="text"
          placeholder="pierre.lafond@gmail.com"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className="fourthBlocInput">
        <label className="denomination" htmlFor="city">
          Ville
        </label>
        <input
          className="inputModificationProfile"
          type="text"
          placeholder="Paris"
          name="city"
          value={city}
          onChange={onChange}
        />
      </div>
      <div className="BlocPostalBirthday">
        <div className="fifthBlocInput">
          <label className="denomination" htmlFor="postal-code">
            Code postal
          </label>
          <input
            className="inputModificationProfileBloc"
            type="text"
            placeholder="75000"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="sixthBlocInput">
          <label className="denomination" htmlFor="start">
            Date de naissance
          </label>
          <input
            className="inputModificationProfileBloc"
            type="date"
            id="birthdayDate"
            placeholder="1953-03-26"
            min="1900-01-01"
            max="2018-12-31"
            name="birthdayDate"
            value={birthdayDate}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="sixthBlocInput">
        <label className="Gender" htmlFor="gender">
          Genre
        </label>
        <div className="inputGenre">
          <div className="inputRadioMale">
            <input
              className="MaleGenre"
              type="radio"
              id="male"
              name="gender"
              value="Masculin"
              checked={gender === "Masculin"}
              onChange={onChange}
            />
            <label className="nameInputMale" htmlFor="male">
              Masculin
            </label>
          </div>
          <div className="inputRadioFemale">
            <input
              className="FemaleGenre"
              type="radio"
              id="female"
              name="gender"
              value="Féminin"
              checked={gender === "Féminin"}
              onChange={onChange}
            />
            <label className="nameInputFemale" htmlFor="female">
              Féminin
            </label>
          </div>
        </div>
        <button type="button" onClick={handleSave}>
          Click
        </button>
      </div>
      <ButtonTutorial nextOrPreview="validateProfile" path="/profile">
        Valider mon profil
      </ButtonTutorial>
    </main>
  );
}

export default ModificationPage;
