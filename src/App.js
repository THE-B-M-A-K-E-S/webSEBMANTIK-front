import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Chaud from "./views/Chaud";
import Recette from "./views/Recette";
import Plat from "./views/Plat";
import Ingredient from "./views/Ingredient"
import Difficulte from "./views/Difficulte"
import Livraison from "./views/Livraison"
import 'bootstrap/dist/css/bootstrap.css';
import Froid from "./views/Froid";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/recette" element={<Recette />} />
        <Route path="/chaud" element={<Chaud />} />
        <Route path="/froid" element={<Froid />} />
        <Route path="/plat" element={<Plat />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/difficulte" element={<Difficulte />} />
        <Route path="/livraison" element={<Livraison />} />




      </Routes>
    </div>
  );
}

export default App;
