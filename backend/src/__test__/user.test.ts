import * as util from "util";
import axios from "axios";
import { exec } from "child_process";
import path from "path";

// const pExec = util.promisify(exec);

const API = "http://localhost:8000/graphql";
// const CMD_SEED_DB = path.join(__dirname, "/../../dataset.sh");

// Invoke axios
const axios_post = async (API: string, query: string) => {
  return await axios.post(API, {
    query,
  });
};

describe("User.ts", () => {
  // beforeAll(async () => {
  //   return await pExec(CMD_SEED_DB);
  // });

  it("Should create user", async () => {
    const query = `
      mutation {
        createUser(user: {name: "test", email: "test@test.com", password: "test"}) {
          __typename
          ... on UserResult {
             _id
            name
             email
            password
          }
          ... on Error {
            error
            message
          }
        }
      }
      `;
    const response = await axios_post(API, query);
    expect(response.data).toMatchSnapshot();
  });
});
