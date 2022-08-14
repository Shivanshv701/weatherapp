import { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header/Header';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forgotpass from "./components/forgotpass";
import ConfirmPass from "./components/ConfirmPass";
import Edit from "./components/Edit";
import List from "./components/List";
import Home from "./components/Home";
import Forecast from "./components/Forecast";
import Protected from "./Protected";
import {initialState, reducer} from "../src/reducer/Userreducer"

import './App.css';
import Favmore from "./components/Favmore";
import Currentinfo from "./components/Currentinfo";
import Footer from "./Header/Footer";
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Header />
        <br/>
        <br/>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path='/confirmpass/:token' element ={<ConfirmPass />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/forecast" element={<Protected Comp={Forecast} />} />
          <Route path="/favourite" element={<Protected Comp={List} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/favmore/:city" element={<Favmore/>} />
          <Route path="/currentinfo" element={<Currentinfo/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      </UserContext.Provider>
      </div>

  );
}

export default App;
