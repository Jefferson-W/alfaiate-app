import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateClient from "./pages/CreateClient";
import ClientListPage from "./pages/ClientListPage";
import "./App.css";

const App = () => {
  const [clients, setClients] = useState([]);

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Cadastro de Clientes</Link>
          <Link to="/clients">Lista de Clientes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateClient onAddClient={addClient} />} />
          <Route path="/clients" element={<ClientListPage clients={clients} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
