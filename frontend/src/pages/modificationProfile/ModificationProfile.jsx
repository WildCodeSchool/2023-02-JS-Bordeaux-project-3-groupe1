import AppareilPhoto from "../../assets/pictures/appareil_photo.png";
import ButtonTutorial from "../../components/containerObjectifVideoQuizzInTutorials/ButtonTutorial";

function ModificationPage() {
  return (
    <main>
      <div className="photoLocation">
        <img className="camera" src={AppareilPhoto} alt="appareil" />
      </div>
      <div className="firstBlocInput">
        <label className="denomination" htmlFor="name-user">
          Nom
        </label>
        <input
          className="inputModificationProfile"
          type="text"
          name="name-user"
          placeholder="Lafond"
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
        />
      </div>
      <div className="thirdBlocInput">
        <label className="denomination" htmlFor="mail">
          Mail
        </label>
        <input
          className="inputModificationProfile"
          id="email"
          placeholder="pierre.lafond@gmail.com"
          type="text"
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
          />
        </div>
        <div className="sixthBlocInput">
          <label className="denomination" htmlFor="start">
            Date de naissance
          </label>
          <input
            className="inputModificationProfileBloc"
            type="date"
            id="start"
            name="trip-start"
            placeholder="1953-03-26"
            min="1900-01-01"
            max="2018-12-31"
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
              value="masculin"
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
              value="feminin"
            />
            <label className="nameInputFemale" htmlFor="female">
              Féminin
            </label>
          </div>
        </div>
      </div>
      <ButtonTutorial nextOrPreview="validateProfile" path="/profile">
        Valider mon profil
      </ButtonTutorial>
    </main>
  );
}
export default ModificationPage;
