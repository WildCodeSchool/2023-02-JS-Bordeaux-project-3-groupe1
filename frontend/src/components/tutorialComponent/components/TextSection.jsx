import PropTypes from "prop-types";

function TextSection({
  previewUrl,
  handleExplicationChange,
  adjustTextareaHeight,
  explicationTutorial,
}) {
  return (
    <div className="container-explications-preview">
      <div className="container-explications-preview-img">
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <textarea
          name="explicationTutorial"
          id="explicationTutorial"
          onChange={(e) => {
            handleExplicationChange(e);
            adjustTextareaHeight(e);
          }}
          value={explicationTutorial}
          placeholder="Insérer les explications"
        />
      </div>
    </div>
  );
}

TextSection.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  handleExplicationChange: PropTypes.func.isRequired,
  adjustTextareaHeight: PropTypes.func.isRequired,
  explicationTutorial: PropTypes.string.isRequired,
};

export default TextSection;
