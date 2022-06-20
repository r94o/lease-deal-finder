const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/cars');

router.get("/", CarsController.Index);

module.exports = router;