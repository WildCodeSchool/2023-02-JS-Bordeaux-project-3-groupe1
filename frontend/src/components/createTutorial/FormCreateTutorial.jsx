import CreateNameTutorial from "./CreateNameTutorial";

function FormCreateTutorial() {
  const handleTutorial = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {};

  const handleCreateTutorial = (e) => {
    e.preventDefault();
    handleTutorial(e);
    handleClick();
  };

  return (
    <div className="container-formCreateTutorial">
      <CreateNameTutorial />
      <div className="container-formCreateTutorial-button">
        <button type="button" onClick={handleCreateTutorial}>
          Valider le tutoriel
        </button>
      </div>
    </div>
  );
}

export default FormCreateTutorial;
