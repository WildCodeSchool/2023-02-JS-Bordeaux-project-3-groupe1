import AppareilPhoto from "../../assets/pictures/appareil_photo.png";

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
          <label className="denomination" htmlFor="birthday">
            Date de naissance
          </label>
          <input
            className="inputModificationProfileBloc"
            type="number"
            placeholder="01/01/1900"
          />
        </div>
      </div>
    </main>
  );
}
export default ModificationPage;
