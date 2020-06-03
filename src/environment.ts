export const AUTH_LEVEL = process.env.AUTH_LEVEL || "L0";
export const MYINFO_API_TOKEN = process.env.MYINFO_API_TOKEN || "https://sandbox.api.myinfo.gov.sg/com/v3/token";
export const MYINFO_APP_CLIENT_ID = process.env.MYINFO_APP_CLIENT_ID || "STG2-MYINFO-SELF-TEST";
export const MYINFO_APP_CLIENT_SECRET =
  process.env.MYINFO_APP_CLIENT_SECRET || "44d953c796cccebcec9bdc826852857ab412fbe2";
export const MYINFO_APP_REDIRECT_URL = process.env.MYINFO_APP_REDIRECT_URL || "http://localhost:3001/callback";
export const MYINFO_API_PERSON = process.env.MYINFO_API_PERSON || "https://sandbox.api.myinfo.gov.sg/com/v3/person";
export const MYINFO_SIGNATURE_CERT_PUBLIC_CERT =
  process.env.MYINFO_SIGNATURE_CERT_PUBLIC_CERT || "./ssl/staging_myinfo_public_cert.cer";
