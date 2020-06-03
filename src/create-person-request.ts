import * as queryString from "query-string";
import axios from "axios";

import { generateAuthorizationHeader } from "./security-helper";
import { MYINFO_APP_CLIENT_ID, AUTH_LEVEL, MYINFO_APP_CLIENT_SECRET, MYINFO_API_PERSON } from "./environment";

export const createPersonRequest = function(sub, validToken) {
  const url = `${MYINFO_API_PERSON}/${sub}/`;

  // assemble params for Person API
  const params = {
    client_id: MYINFO_APP_CLIENT_ID,
    attributes: "name,regadd"
  };

  // assemble headers for Person API
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache"
  };

  // Add Authorisation headers for connecting to API Gateway
  const authHeaders = generateAuthorizationHeader(
    url,
    params,
    "GET",
    "", // no content type needed for GET
    AUTH_LEVEL,
    MYINFO_APP_CLIENT_ID,
    "",
    MYINFO_APP_CLIENT_SECRET
  );

  // NOTE: include access token in Authorization header as "Bearer " (with space behind)
  if (authHeaders) {
    headers["Authorization"] = authHeaders + ",Bearer " + validToken;
  } else {
    headers["Authorization"] = "Bearer " + validToken;
  }

  console.log("Request Header for Person API:");
  console.log(JSON.stringify(headers));

  // invoke person API
  const request = axios.get(url, { params, headers });

  return request;
};
