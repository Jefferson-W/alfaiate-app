import React, { useState } from "react";

const ClientForm = ({ onAddClient }) => {
  const [name, setName] = useState("");
  const [measurements, setMeasurements] = useState({
    height: "",
    chest: "",
    waist: "",
    hips: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && measurements.height && measurements.chest) {
      onAddClient({ name, measurements });
      setName("");
      setMeasurements({ height: "", chest: "", waist: "", hips: "" });
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  };

  const handleMeasurementChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nome do Cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        name="height"
        placeholder="Altura (cm)"
        value={measurements.height}
        onChange={handleMeasurementChange}
        required
      />
      <input
        type="number"
        name="chest"
        placeholder="Peitoral (cm)"
        value={measurements.chest}
        onChange={handleMeasurementChange}
        required
      />
      <input
        type="number"
        name="waist"
        placeholder="Cintura (cm)"
        value={measurements.waist}
        onChange={handleMeasurementChange}
      />
      <input
        type="number"
        name="hips"
        placeholder="Quadril (cm)"
        value={measurements.hips}
        onChange={handleMeasurementChange}
      />
      <button type="submit">Cadastrar Cliente</button>
    </form>
  );
};

export default ClientForm;
