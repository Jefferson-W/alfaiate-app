import React from "react";
import ClientForm from "../components/ClientForm";

const CreateClient = ({ onAddClient }) => {
  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <ClientForm onAddClient={onAddClient} />
    </div>
  );
};

export default CreateClient;
