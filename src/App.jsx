import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateClient from "./pages/CreateClient";
import ClientListPage from "./pages/ClientListPage";
import "./App.css";

const App = () => {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  const addClient = (newClient) => {
    if (editingClient) {
      // Atualiza o cliente em edição
      setClients((prevClients) =>
        prevClients.map((client, index) =>
          index === editingClient.index ? newClient : client
        )
      );
      setEditingClient(null);
    } else {
      // Adiciona um novo cliente
      setClients([...clients, newClient]);
    }
  };

  const deleteClient = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const editClient = (index) => {
    const clientToEdit = clients[index];
    setEditingClient({ ...clientToEdit, index });
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Cadastro de Clientes</Link>
          <Link to="/clients">Lista de Clientes</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<CreateClient onAddClient={addClient} editingClient={editingClient} />}
          />
          <Route
            path="/clients"
            element={<ClientListPage clients={clients} onDelete={deleteClient} onEdit={editClient} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;