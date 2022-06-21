const request = require("supertest");
const app = require("../app");
const Car = require("../models/car")
const createCar = require("./mocks/car.mock")
require("./helpers/mongo.helper")

beforeEach((done) => {
  Car.deleteMany({}, done);
});

describe("GET /cars", () => {
  describe("when database is empty", () => {
    test("returns an empty array", async () => {
      const { header, statusCode, body } = await request(app).get("/cars")
      expect(header["content-type"]).toMatch(/json/);
      expect(statusCode).toBe(200);
      expect(body).toEqual([]);
    });
  })
  describe("when database has entries", () => {
    test("returns all car objects", async () => {
      await Car.create(createCar());
      await Car.create(createCar());
      const { header, statusCode, body} = await request(app).get("/cars");
      expect(header["content-type"]).toMatch(/json/);
      expect(statusCode).toBe(200);
      expect(body).toMatchObject([createCar(), createCar()]);
    }) 
  })
})

describe("GET /cars/:id", () => {
  describe("when the id is present in the collection", () => {
    test("the car specified is returned", async () => {
      const car = await Car.create(createCar());
      const secondCar = await Car.create(createCar());
      const { header, statusCode, body } = await request(app).get(`/cars/${car._id}`);
      expect(header["content-type"]).toMatch(/json/);
      expect(statusCode).toBe(200);
      expect(body).toMatchObject(createCar());
    })
  })
  describe("when the id is not present in the collection", () => {
    test("a 404 is returned", async () => {
      const { header, statusCode, body } = await request(app).get(`/cars/62b19b7c7a473892edd685a2`);
      expect(header["content-type"]).toMatch(/json/);
      expect(statusCode).toBe(404);
      expect(body).toMatchObject({ error: 'Car Not Found'});
    })
  })

})

describe("POST /cars/", () => {
  test("Car is added to the collection", async() => {
    const { header, statusCode, body } = await request(app).post("/cars").send(createCar())
    const cars = await Car.find({})
    expect(header["content-type"]).toMatch(/json/);
    expect(statusCode).toBe(200);
    expect(cars).toMatchObject([createCar()])
    expect(body.message).toBe("Car has been added")
  })
})

describe("PATCH /cars/:id", () => {
  test("car lowest price is updated", async() => {
    const { _id } = await Car.create(createCar());
    const { header, statusCode, body } = await request(app).patch(`/cars/${_id}`).send({ lowestPrice: 150 });
    const car = await Car.findById(_id);
    expect(header["content-type"]).toMatch(/json/);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Car has been amended")
    expect(car.lowestPrice).toBe(150);
  })
})

describe("DELETE /cars/:id", () => {
  test("car gets deleted", async() => {
    const { _id } = await Car.create(createCar());
    const { header, statusCode, body } = await request(app).delete(`/cars/${_id}`)
    const car = await Car.findById(_id);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Car has been deleted")
    expect(car).toBeNull();
  })
})

describe("GET /cars/notifications", () => {
  test("returns only cars with notification flag", async() => {
    await Car.create(createCar());
    await Car.create(createCar({ notification: true}));
  
    const { header, statusCode, body} = await request(app).get("/cars/notifications");
  
    expect(header["content-type"]).toMatch(/json/);
    expect(statusCode).toBe(200);
    expect(body).toMatchObject([createCar({ notification: true })]);
  })
})

