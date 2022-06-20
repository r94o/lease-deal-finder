const request = require("supertest");
const app = require("../app");

describe("GET /cars", () => {
  describe("when database is empty", () => {
    test("returns an empty object", (done) => {
      request(app)
        .get("/cars")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({}, done)
    });
  })
  describe("when database has entries", () => {
    test("returns all car objects", (done) => {
      jest.spyOn(Car, 'find').mockImplementation(() => mockResponse.twoCars)
      request(app)
        .get("/cars")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(mockResponse.twoCars, done)
    })
  })
})