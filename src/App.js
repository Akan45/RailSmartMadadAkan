import React , {useEffect}from 'react'
import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community"
import { useState } from "react";
import { useAuthStore } from './store/store';

function App() {
  const [name] = useState("");
  const { setAuth } = useAuthStore();

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, [setAuth]);
  return (
    <Routes>
      <Route path="/" element={<Layout name={name} />}>
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="recovery" element={<Recovery />} />
        <Route path="reset" element={<Reset />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="community" element={<Community/>} />
        <Route path="profile" element={<Profile/>}/>
        {/* <Route
          path="profile"
          element={
            localStorage.getItem("authToken") ? (
              <Profile setName={setName} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />*/}
      </Route> 
    </Routes>
  );
}

export default App;
