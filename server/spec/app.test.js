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
