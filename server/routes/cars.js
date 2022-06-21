const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/cars');

router.get("/", CarsController.Index);
router.get("/:id", CarsController.FindById);
router.post("/", CarsController.AddCar);
router.patch("/:id", CarsController.AmendCar);

module.exports = router;