import React from "react";

const ClientList = ({ clients, onDelete, onEdit }) => {
  return (
    <div className="client-list">
      {clients.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        clients.map((client, index) => (
          <div key={index} className="client-card">
            <h3>{client.name}</h3>
            <h3>{client.phone}</h3>
            <h2>Medidas:</h2>
            <p>Altura: {client.measurements.height} cm</p>
            <p>Peitoral: {client.measurements.chest} cm</p>
            <p>Cintura: {client.measurements.waist} cm</p>
            <p>Quadril: {client.measurements.hips} cm</p>
            <h2>Preço:</h2>
            <p>R$ {client.price}</p>
            <h2>Data para entrega:</h2>
            <p>{client.deliveryDate}</p>
            <div>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ClientList;
