import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Component/Navigation/Header";
import Home from "./Pages/Home"
import Footer from "./Component/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Header ></Header>
      <Routes>
      <Route exact path="/" element={<Home />}> </Route>
        <Route  path="/about"></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
