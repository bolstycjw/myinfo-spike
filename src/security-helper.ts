import * as jwt from "jsonwebtoken";
import * as fs from "fs";

import { MYINFO_SIGNATURE_CERT_PUBLIC_CERT } from "./environment";

export const decodeJwtToken = function(token: string): any {
  // verify token
  // ignore notbefore check because it gives errors sometimes if the call is too fast.
  try {
    const decoded = jwt.verify(token, fs.readFileSync(MYINFO_SIGNATURE_CERT_PUBLIC_CERT, "utf8"), {
      algorithms: ["RS256"],
      ignoreNotBefore: true
    });
    return decoded;
  } catch (error) {
    console.error("Error with verifying and decoding JWS: %s", error);
    throw "Error with verifying and decoding JWS";
  }
};

export const generateAuthorizationHeader = function(
  url,
  params,
  method,
  strContentType,
  authType,
  appId,
  keyCertContent,
  passphrase
) {
  if (authType == "L2") {
    return "";
  } else {
    return "";
  }
};
