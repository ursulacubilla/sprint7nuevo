import React from "react";
import Application from "./application";
import Welcome from "./welcome";
import { Route, Routes } from "react-router-dom";
import Links from "./links";


function App() {

  return (
    <div className="App">

      <Links />

      <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/App/" element={<Application />} />
        </Routes>

    </div>
  );
}

export default App;

