import Nav from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Location2 from "./components/Location";
import { Routes, Route } from "react-router";
import { Signup } from "./components/Auth/Signup";
import { Login } from "./components/Auth/Login";
import { useContext, useState } from "react"
import { AppContext } from "./appContext/AppContextProvider"

function App() {
  const [modal, setModal] = useState(true);
  const { terms } = useContext(AppContext)
  return (
    <>
      <div style={{ width: "100%", position: "absolute", zIndex: "14" }}>
        <Nav />
      </div>
      {modal ? <Location state={setModal} /> : ""}
      {terms ? <Location2 /> : ""}
      <div style={{ height: "80px", width: "100%" }}>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
