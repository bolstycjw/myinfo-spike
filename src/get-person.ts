import { RequestHandler } from "express";
import { createTokenRequest } from "./create-token-request";
import { decodeJwtToken } from "./security-helper";
import { createPersonRequest } from "./create-person-request";

export const getPerson: RequestHandler = async function(req) {
  const { code } = req.body;
  console.log(code);

  try {
    const {
      data: { accessToken }
    } = await createTokenRequest(code);

    console.log(accessToken);
    const { sub } = decodeJwtToken(accessToken);

    await createPersonRequest(sub, accessToken);
  } catch (e) {
    console.error("Token Call Error: ", e.response.status);
    console.error(e.response.data?.message);
  }
};
