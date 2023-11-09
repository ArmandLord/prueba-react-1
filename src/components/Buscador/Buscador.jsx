import React from "react";

const Buscador = ({ buscador, setBuscador }) => {
  return (
    <div>
      <label>Buscar fecha</label>
      <input
        type="text"
        placeholder="Buscar fecha"
        value={buscador}
        onChange={(e) => {
          setBuscador(e.target.value);
        }}
      />
    </div>
  );
};

export default Buscador;
