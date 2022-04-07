import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router: React.FC = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signup" element={ <SignUp/>} />
        </Routes>
      </BrowserRouter>
    )
}
export default Router