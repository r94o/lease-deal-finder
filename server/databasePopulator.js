const mongoose = require("mongoose")
const Car = require("./models/car")


const populate = async() => {
  mongoose.connect("mongodb+srv://robo:B04I2SKGnV47BAQX@cluster0.peisi.mongodb.net/lease-deal-finder");
  const db = mongoose.connection;

  db.on("error", () => console.log("hi")); 
  db.once("open", () => console.log("Database connection successful"));


  await Car.create({
    make: 'Cupra',
    model: 'Ateca',
    variant: '2.0 TSI 150',
    notificationThreshold: 250,
    notification: false,
    lowestPrice: 299
  })

  await Car.create({
    make: 'Volkswagen',
    model: 'Golf',
    variant: '2.0 TSI 150',
    notificationThreshold: 300,
    notification: false,
    lowestPrice: 315
  })

  mongoose.connection.close(true);

}

populate();


