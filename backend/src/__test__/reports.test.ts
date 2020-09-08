import axios from "axios";

const API = "http://localhost:8000/graphql";

describe("Reports.ts", () => {
  it("should be true when adding data", async () => {
    const query = `mutation {
        addReport(add: {id: "5f449b73e2ccbc43aa520488", patient_id: 123, patient_name: "alex", patient_referedby: "dr", patient_age: 18, patient_sex: "Male", price: 323.00, date: "2020-08-30T03:44:36.174Z"}){
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
