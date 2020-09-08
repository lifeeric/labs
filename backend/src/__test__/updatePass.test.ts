import * as util from "util";
import axios from "axios";

const API = "http://localhost:8000/graphql";
describe("updatePassword.ts", () => {
  it("should update password", async () => {
    const query = `mutation {
        updatePassword(id: "5f449b73e2ccbc43aa520488",oldPassword: "alex", newPassword: "alex", newPasswordAgain: "alex" ){
          error
          message
        }
      }`;

    const response = await axios.post(
      API,
      {
        query,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjQ0OWI3M2UyY2NiYzQzYWE1MjA0ODgiLCJlbWFpbCI6ImFsZXhAdGVzdC5jb20iLCJpYXQiOjE1OTg1MjE0NDcsImV4cCI6MTYwMTExMzQ0N30.XixEJ5GnAvMZw784gWg1FThe3dLDVIGXNh-B8T-2-24",
        },
      }
    );

    expect(response.data).toMatchSnapshot();
  });
});
