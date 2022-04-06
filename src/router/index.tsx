import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const Router: React.FC = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/login" element={ <Login/>} />
        </Routes>
      </BrowserRouter>
    )
}
export default Router