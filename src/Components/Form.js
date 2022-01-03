import React from "react";

const Form = ({
  name,
  setName,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
  displayForm,
  setDisplayForm,
  setDisplayManifest,
}) => {
  function manifestHandler(e) {
    e.preventDefault();

    setDisplayForm("none");
    setDisplayManifest("flex");
    console.log(name, bgColor, fontColor);
  }

  return (
    <div className="form-div" style={{ display: displayForm }}>
      <h1 className="header">Manifest neoG</h1>

      <form onSubmit={manifestHandler}>
        <div className="input-field">
          <label>Name:</label>{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="input-field">
          <label>Font Color:</label>{" "}
          <input
            type="color"
            onChange={(e) => setFontColor(e.target.value)}
            value={fontColor}
          />
        </div>

        <div className="input-field">
          <label>Background Color:</label>{" "}
          <input
            type="color"
            onChange={(e) => setBgColor(e.target.value)}
            value={bgColor}
          />
        </div>

        <button type="submit">Manifest</button>
      </form>
    </div>
  );
};

export default Form;
