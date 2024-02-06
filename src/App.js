import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SelectAdress from "./pages/selectAdress/SelectAdress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="posts" element={<Posts />}/>
           <Route path="about" element={<About />}/>   */}
        <Route path="*" element={<SelectAdress/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
