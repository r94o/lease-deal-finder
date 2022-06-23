import SelectBox from "./components/SelectBox/SelectBox";
import React, { useState, useEffect } from 'react';

function App() {

  const [cars, setCars] = useState([]);
  const [car, setCar] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3001/cars")
      .then(response => response.json())
      .then(cars => setCars(cars))
  }, [])

  return (
    <div>
      <SelectBox setCar={setCar} cars />
    </div>
  );
}

export default App;