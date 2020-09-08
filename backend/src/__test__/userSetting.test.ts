import * as util from "util";
import axios from "axios";
import { exec } from "child_process";
import path from "path";

const pExec = util.promisify(exec);

const API = "http://localhost:8000/graphql";

describe("UserSettings.ts", () => {
  it("should fetch data", async () => {
    const query = `
query {
    userSetting(id: "5f449b73e2ccbc43aa520488") {
      __typename
      ... on GetUserSettingResult {
        name
        email
        company
      refered{
        company
        name
      }
      }
      ... on Error {
        error
        message }
    }
  }`;

    const response = await axios.post(
      API,
      { query },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjQ0OWI3M2UyY2NiYzQzYWE1MjA0ODgiLCJlbWFpbCI6ImFsZXhAdGVzdC5jb20iLCJpYXQiOjE1OTg1MjA1MzAsImV4cCI6MTYwMTExMjUzMH0.iyjvFqB1rS8kfqaeqzNyM1jpr40AOH2booIP_lTS4CU",
        },
      }
    );

    expect(response.data).toMatchSnapshot();
  });
});
