import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import { S3 } from "aws-sdk";

const app = express();

app.use(helmet());
app.use(cors());
app.get("/", async function(_, res) {
  res.send("hello");
});

app.get("/hello", async function(_, res) {
  const s3 = new S3({ apiVersion: "2006-03-01" });
  const { Body } = await s3
    .getObject({
      Bucket: "muskgowhere.com",
      Key: "index.html"
    })
    .promise();
  res.contentType("html");
  res.send(Body);
});

export default app;
