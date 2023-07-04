import PropTypes from "prop-types";

function InputField(props) {
  const { name, id, value, placeholder, onChange } = props;

  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
