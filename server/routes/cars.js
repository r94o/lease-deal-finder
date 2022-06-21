const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/cars');

router.get("/", CarsController.Index);
router.get("/notifications", CarsController.CarNotifications);
router.get("/:id", CarsController.FindById);
router.post("/", CarsController.AddCar);
router.patch("/:id", CarsController.AmendCar);
router.delete("/:id", CarsController.DeleteCar);




module.exports = router;