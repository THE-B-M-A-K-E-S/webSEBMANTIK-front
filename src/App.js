import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Chaud from "./views/Chaud";
import Livraison from "./views/Livraison"
import Client from "./views/Client"
import 'bootstrap/dist/css/bootstrap.css';
import Froid from "./views/Froid";
import Produits from "./views/Produits";
import International from "./views/International";
import National from "./views/National";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/produits" element={<Produits />} />
        <Route path="/chaud" element={<Chaud />} />
        <Route path="/froid" element={<Froid />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/International" element={<International />} />
        <Route path="/national" element={<National />} />




      </Routes>
    </div>
  );
}

export default App;
