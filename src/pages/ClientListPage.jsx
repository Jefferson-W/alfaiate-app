import React from "react";
import ClientList from "../components/ClientList";

const ClientListPage = ({ clients }) => {
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ClientList clients={clients} />
    </div>
  );
};

export default ClientListPage;
