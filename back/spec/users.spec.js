const app = require("../app");
const supertest = require("supertest");
let request = supertest(app);

//Case1
describe("users routes", function () {
  it("test post", function () {
    request
      .post("/users")
      .send({ userName: "Rofael", password: "22222" })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
          jasmine.objectContaining({ userName: "Rofael" })
        );
      });
  });

  //Case2
  it("get all users", function () {
    request.get("/users").then((res) => {
      expect(res.body).toEqual(jasmine.any(Array));
      expect(res.body.length).toEqual(8);
    });
  });
});
