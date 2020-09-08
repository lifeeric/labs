import * as util from "util";
import axios from "axios";

const API = "http://localhost:8000/graphql";

describe("GetExpenses.ts", () => {
  it("should be true", async () => {
    const query = `{
            getExpenses(id: "5f449b73e2ccbc43aa520488") {
                __typename
              ... on GetExpensesResult {
                    name
              description
              price
              date
             
            }
              ... on Error {
                 error
                message
              }
              }
          }`;

    const response = await axios.post(
      API,
      { query },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjQ0OWI3M2UyY2NiYzQzYWE1MjA0ODgiLCJlbWFpbCI6ImFsZXhAdGVzdC5jb20iLCJpYXQiOjE1OTg3NjA5NzMsImV4cCI6MTYwMTM1Mjk3M30.n0KKCB1Ve8m2RSsUZWZ9fm4e7EE4OnOiQqViPH5HHRo",
        },
      }
    );

    expect(response.data).toMatchSnapshot();
  });
});
