import { Route, Routes } from "react-router-dom";
// import Loader from "./layout/Loader";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// Componenets
import Home from "./components/Home";
import Login from "./components/auth/Login";

import { loadUser } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      {/* <Loader /> */}
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
