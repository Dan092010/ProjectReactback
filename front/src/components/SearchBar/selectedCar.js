import React, { useState } from "react";
import { Card } from "./card";

const CarList = (carData) => {
  const [carroSelec, setCarroSelec] = useState("Carro");

  function handleCarSelection(selectedCar) {
    setCarroSelec(selectedCar);
    alert("El carro seleccionado es " + selectedCar);
  }

  return (
    <div className="car-list">
      {carData.map((car) => (
        <Card key={car.id} val={car} onSelectCar={handleCarSelection} />
      ))}
      <p>Carro seleccionado: {carroSelec}</p>
    </div>
  );
};

export default CarList
