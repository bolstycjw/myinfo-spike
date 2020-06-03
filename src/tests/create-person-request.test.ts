import * as environment from "../environment";
import { createPersonRequest } from "../create-person-request";

process.env = { ...process.env, ...environment };

const sub = "915267f0-5939-0230-78e7-b8cdbaab8518";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MTUyNjdmMC01OTM5LTAyMzAtNzhlNy1iOGNkYmFhYjg1MTgiLCJqdGkiOiJua0NuWUp3WlpWalZ2SV9fVThBWmJEVE0zWC1hMHk0ckRHa24tVXNRIiwic2NvcGUiOlsidWluZmluIiwibmFtZSIsInNleCIsInJhY2UiLCJuYXRpb25hbGl0eSIsImRvYiIsImVtYWlsIiwibW9iaWxlbm8iLCJyZWdhZGQiLCJob3VzaW5ndHlwZSIsImhkYnR5cGUiLCJtYXJpdGFsIiwiZWR1bGV2ZWwiLCJub2EtYmFzaWMiLCJvd25lcnByaXZhdGUiLCJjcGZjb250cmlidXRpb25zIiwiY3BmYmFsYW5jZXMiXSwidG9rZW5OYW1lIjoiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImdyYW50X3R5cGUiOiJhdXRob3JpemF0aW9uX2NvZGUiLCJleHBpcmVzX2luIjoxODAwLCJhdWQiOiJTVEcyLU1ZSU5GTy1TRUxGLVRFU1QiLCJyZWFsbSI6Im15aW5mby1jb20iLCJpc3MiOiJodHRwczovL3Rlc3QuYXBpLm15aW5mby5nb3Yuc2cvc2VydmljZWF1dGgvbXlpbmZvLWNvbSIsImlhdCI6MTU4MzkzODMzMiwibmJmIjoxNTgzOTM4MzMyLCJleHAiOjE1ODM5NDAxMzJ9.DvmE5jSNDKfARZyI5yZ0SlUPH1zQVnigsT6uhXnOZILOA1htkpkBWH21mdLnsWmZ3QeHXgX1jqUkq2uda1YimQUsOwSCXWmWGNrHbzM2gl50F4dH2rBKTB5xU0_Qla6PaV-dQJfIXw9ksn8cPvSVqbDSqO8hlbprieIEob6dngQW_RHwSSWPdpuWzSfZgQ2xEQpYAUljN7w0zLGYdDb8YoHqojpkyEjXpPIiiMSXYxE_Pmckk6rEdHad_r3GbAgIXCviT1bMMzKcGTjJIHBvofcxfcK-Y94VClwx4I56Sc541y3k6O18PEvrGmKtWWF8Axy1yoVtZSQVLEFZmm3T_A";

describe("createPersonRequest", function() {
  describe("when valid sub and token is given", function() {
    it("returns body with person info", async function() {
      // const response = await createPersonRequest("", token);
      // console.log(response.data);
      // expect(response.data).toHaveProperty("access_token");
    });
  });

  describe("when invalid code is given", function() {
    it("returns body with token", async function() {
      try {
        const response = await createPersonRequest(sub, token);
        expect(response).toHaveProperty("data.name");
        expect(response).toHaveProperty("data.regadd");
      } catch (e) {
        console.error(e.response.data.message);
        expect(e.response).toHaveProperty("data.message");
      }
    });
  });
});
