import { useEffect, useState } from "react";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";
import AppareilPhoto from "../../assets/pictures/appareil_photo.png";
import { sender, fetcher } from "../../services/userService";

function ModificationPage() {
  const [picture, setPicture] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [gender, setGender] = useState("Masculin");
  const [userId] = useState(1);
  const [previewUrl, setPreviewUrl] = useState(null);

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

  useEffect(() => {
    fetcher("users", userId)
      .then((data) => {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
        setCity(data.city);
        setLocation(data.location);
        if (data.birthdayDate) {
          const originalDate = data.birthdayDate;
          const formattedDate = new Date(originalDate)
            .toISOString()
            .split("T")[0];
          setBirthdayDate(formattedDate);
        }
        setGender(data.gender);
        setPictureUrl(data.picture);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setPicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
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
      pictureUrl,
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
        <input
          type="file"
          name="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFile}
        />
        <label htmlFor="fileInput">
          <img className="camera" src={AppareilPhoto} alt="appareil" />
        </label>
        {previewUrl && <img src={previewUrl} alt="Preview" />}
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
      </div>
      <ButtonTutorial
        handleTrueStep={handleSave}
        nextOrPreview="validateProfile"
        path="/profile"
      >
        Valider mon profil
      </ButtonTutorial>
    </main>
  );
}

export default ModificationPage;
