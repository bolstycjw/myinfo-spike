import axios, { AxiosResponse } from "axios";
import * as queryString from "query-string";
import {
  MYINFO_APP_REDIRECT_URL,
  MYINFO_APP_CLIENT_ID,
  MYINFO_APP_CLIENT_SECRET,
  MYINFO_API_TOKEN
} from "./environment";

export const createTokenRequest = function(code: string): Promise<AxiosResponse> {
  // assemble params for Token API
  const params = queryString.stringify({
    code,
    grant_type: "authorization_code",
    redirect_uri: MYINFO_APP_REDIRECT_URL,
    client_id: MYINFO_APP_CLIENT_ID,
    client_secret: MYINFO_APP_CLIENT_SECRET
  });

  console.log("Request Body for Token API:");
  console.log(params);

  // assemble headers for Token API
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache"
  };
  console.log("Request Header for Token API:");
  console.log(JSON.stringify(headers));

  const request = axios.post(MYINFO_API_TOKEN, params, { headers });

  return request;
};
