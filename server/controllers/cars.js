const Car = require('../models/car');


const CarsController = {
  Index: (req, res) => {
    Car.find((err, cars) => {
      if (err) throw err;
      res.json(cars);
    })
  }
};

module.exports = CarsController;