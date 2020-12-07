/**
 * Author       : Azaz ur rehman <azaz.bscs3173@iiu.edu.pk>
 * Date         : 07/12/2020
 * Description  : Sample file in which simngle API test is implemented
 */
const axios = require("axios");
const { expect } = require("chai");
//{describe} defines collection of test cases
describe("Sample API Test with Mocha", async () => {
  /**
   * baseURL= https://reqres.in/
   */
  let baseURL = "https://reqres.in/";
  //{before} Execute before all your test caes or in the start
  before(async function () {
    //TODO before your test execution
  });
  //{before} Execute before all your test caes or in the start
  beforeEach(async function () {
    //TODO before your test execution
  });
  after(async function () {
    //TODO Your code for perform any action after all test cases are finished
  });
  afterEach(async function () {
    //TODO Your code for perform any action after each Test case finished
  });
  it("Test-01 - Get Single User API", async () => {
    //Simple Get Request
    try {
      let response = await axios.get(`${baseURL}api/users/2`); //cancatinate API with baseURl
      expect(response.status).to.be.equal(200); //Mean Response must be equal to 200
    } catch (error) {
      expect.fail(error);
    }
  });
  it("Test-02 - Create User API", async () => {
    //Simple Delete Request
    try {
      const parameters = {
        name: "Azaz",
        job: "Autoamtion Engineer",
      };
      let response = await axios.post(
        `https://reqres.in/api/users`,
        parameters
      );
      expect(response.status).to.be.equal(201); //Mean Response must be equal to 200
    } catch (error) {
      expect.fail(error);
    }
  });
  s;
}); //end of You Main suit Name
