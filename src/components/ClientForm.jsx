import React, { useState, useEffect } from "react";

const ClientForm = ({ onAddClient, editingClient }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [measurements, setMeasurements] = useState({
    height: "",
    chest: "",
    waist: "",
    hips: "",
  });

  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setPhone(editingClient.phone);
      setPrice(editingClient.price);
      setDeliveryDate(editingClient.deliveryDate);
      setMeasurements(editingClient.measurements);
    }
  }, [editingClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && measurements.height && measurements.chest) {
      onAddClient({ name, phone, price, deliveryDate, measurements });
      setName("");
      setPhone("");
      setPrice("");
      setDeliveryDate("");
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
      <input type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
      <input
        type="number"
        name="price"
        placeholder="Preço (R$)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="date"
        name="delivery date"
        placeholder="Data para entrega (DD/MM/AAAA)"
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
      />
      <button type="submit">{editingClient ? "Atualizar Cliente" : "Cadastrar Cliente"}</button>
    </form>
  );
};

export default ClientForm;
