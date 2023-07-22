import React from "react";

// bu ornek te reactstrap degilde bootstrap kullanilmistir

const TextInput = ({ name, label, onChange, placeHolder,value, error }) => {
  let wrapperClass = "form-group"; // bootstrap ile alakali
  if (error && error.length > 0) {
    wrapperClass += " has-error"; // bootstrap ile alakali
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value || ""}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
