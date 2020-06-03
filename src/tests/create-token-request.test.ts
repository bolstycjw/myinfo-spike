import { createTokenRequest } from "../create-token-request";
import * as environment from "../environment";

process.env = { ...process.env, ...environment };

describe("createTokenRequest", function() {
  describe("when valid code is given", function() {
    it("returns body with token", async function() {
      // const response = await createTokenRequest("07f6e421a011ddd0f39b7c78c5a64d0460af43ec");
      // console.log(response.data);
      // expect(response.data).toHaveProperty("access_token");
    });
  });

  describe("when invalid code is given", function() {
    it("returns body with token", async function() {
      try {
        await createTokenRequest("82a6fd68072eef4488f146a9de0fe2776c07c691");
      } catch (e) {
        expect(e.response).toHaveProperty("data.message");
      }
    });
  });
});
