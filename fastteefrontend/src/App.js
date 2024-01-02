import Welcome from "./Pages/Welcome/Welcome";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import TeeSheetView from "./Pages/TeeSheetView/TeeSheetView";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/teetimes" element={<TeeSheetView />} />
          </Routes>
      </BrowserRouter>
 );
}

export default App;
