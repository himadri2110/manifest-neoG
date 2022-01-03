import React from "react";

const Manifest = ({ name, bgColor, fontColor, displayManifest }) => {
  return (
    <div
      className="manifest-div"
      style={{ display: displayManifest, backgroundColor: bgColor }}
    >
      <p style={{ color: fontColor }}>
        {name.charAt(0).toUpperCase() + name.slice(1)} will successfully
        complete neoG Camp by June 2022.
      </p>
    </div>
  );
};

export default Manifest;
