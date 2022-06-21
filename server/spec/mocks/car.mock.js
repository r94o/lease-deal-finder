
const createCar = (overrides) => {
  return {
      make: "Cupra",
      model: "Ateca Estate",
      variant: "2.0 TSI VZ2 5dr DSG 4Drive",
      notificationThreshold: 300,
      lowestPrice: 250,
      ...overrides
  }
}

module.exports = createCar;