import { Route, Routes } from "react-router-dom";
import Loader from "./layout/Loader";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
