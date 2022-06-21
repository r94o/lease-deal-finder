const Car = require('../models/car');


const CarsController = {
  Index: (req, res) => {
    Car.find((err, cars) => {
      if (err) throw err;
      res.status(200).json(cars);
    })
  },
  FindById: (req, res) => {
    Car.findById(req.params.id, (err, car) => {
      if (!car) return res.status(404).json({ error: "Car Not Found" });
      res.status(200).json(car);
    })
  },
  AddCar: (req, res) => {
    console.log(req.body)
    Car.create(req.body, (err, car) => {
      res.status(200).json({ message: "Car has been added"})
    });
  }
};

module.exports = CarsController;