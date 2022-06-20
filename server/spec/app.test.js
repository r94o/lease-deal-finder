const request = require("supertest");
const app = require("../app");


describe("GET /cars", () => {
  describe("when database is empty", () => {
    test("Returns an empty object", (done) => {
      request(app)
        .get("/cars")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({}, done)
    });
  })
})