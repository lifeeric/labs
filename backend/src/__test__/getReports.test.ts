import axios from "axios";

const API = "http://localhost:8000/graphql";

describe("GetReports.ts", () => {
  it("should be data", async () => {
    const query = `
        query {
            getReports(id: "5f449b73e2ccbc43aa520488", patient_id: 0) {
            __typename
              ... on getReportResult {
                       patient_id
                patient_name
                patient_referedby
                patient_age
                patient_sex
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
