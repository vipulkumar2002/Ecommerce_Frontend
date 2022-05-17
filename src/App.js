import { Route, Routes } from "react-router-dom";
import Loader from "./layout/Loader";
import Home from "./components/Home";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
