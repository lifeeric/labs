import Users from "../../../Models/user.model";
import bcrypt from "bcryptjs";
import { jwtHelper, throwError } from "../../../Helper";

export default {
  login: async (parent: any, args: any, context: any, info: any) => {
    // Simplify
    const { email, password } = args;

    // finding user
    const doesUserFound = await Users.findOne({ email });

    // if not found
    if (!doesUserFound) return throwError("User doesn't exists on our system!");

    // Verifying password
    const passwordMatched = await bcrypt.compare(
      password,
      doesUserFound.password
    );

    // wrong password
    if (!passwordMatched) return throwError("Password doesn't matched!");

    // Generate token
    const token = jwtHelper(email, doesUserFound);

    // return data
    return {
      __typename: "LoginUserResult",
      token,
      email,
      _id: doesUserFound._id,
    };
  },
};
