import React from "react";

const ClientList = ({ clients }) => {
  return (
    <div className="client-list">
      {clients.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        clients.map((client, index) => (
          <div key={index} className="client-card">
            <h3>{client.name}</h3>
            <p>Altura: {client.measurements.height} cm</p>
            <p>Peitoral: {client.measurements.chest} cm</p>
            <p>Cintura: {client.measurements.waist} cm</p>
            <p>Quadril: {client.measurements.hips} cm</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ClientList;
