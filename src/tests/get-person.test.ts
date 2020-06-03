import { getPerson } from "../get-person";
import { createTokenRequest } from "../create-token-request";
import { createPersonRequest } from "../create-person-request";
import { decodeJwtToken } from "../security-helper";

jest.mock("../create-token-request");
jest.mock("../create-person-request");
jest.mock("../security-helper");

describe("getPerson", function() {
  describe("when valid code is given", function() {
    (createTokenRequest as jest.Mock).mockResolvedValue({ data: { accessToken: "abcd" } });
    (decodeJwtToken as jest.Mock).mockResolvedValue({ sub: "1234" });

    it("it creates a person request", async function() {
      const req = { body: { code: "abcd" } };
      await getPerson(req as any, {} as any, {} as any);
      expect(createPersonRequest).toBeCalled();
    });
  });
});
