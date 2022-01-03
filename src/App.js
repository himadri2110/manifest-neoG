import "./App.css";
import { useState } from "react";

import Form from "./Components/Form";
import Manifest from "./Components/Manifest";
import Footer from "./Components/Footer";

const App = () => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("#f0f8ff");
  const [fontColor, setFontColor] = useState("#2f95e9");
  const [displayForm, setDisplayForm] = useState("flex");
  const [displayManifest, setDisplayManifest] = useState("none");

  return (
    <div className="App">
      <Form
        name={name}
        setName={setName}
        bgColor={bgColor}
        setBgColor={setBgColor}
        fontColor={fontColor}
        setFontColor={setFontColor}
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}
        setDisplayManifest={setDisplayManifest}
      />

      <Manifest
        name={name}
        bgColor={bgColor}
        fontColor={fontColor}
        displayManifest={displayManifest}
      />

      <Footer displayForm={displayForm} />
    </div>
  );
};

export default App;
