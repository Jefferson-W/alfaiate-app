import React, { useState } from "react";
import ClientList from "../components/ClientList";

const ClientListPage = ({ clients, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="tilte">Lista de Clientes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar cliente por nome..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ClientList clients={filteredClients} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default ClientListPage;