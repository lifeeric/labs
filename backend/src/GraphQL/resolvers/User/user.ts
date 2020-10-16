import Users from "../../../Models/user.model";
import { hashingPassword, throwError } from "../../../Helper";

export default {
  createUser: async (parent: any, args: any, context: any) => {
    const { name, email, password, company, referedBy } = args.user;

    // check user exists
    const doesUserExist = await Users.findOne({ email });

    if (doesUserExist) return throwError("user already exists!");

    // Hash the password
    const hashedPassword = await hashingPassword(password);

    /**
     * add new user to db
     */
    const addNewUser = new Users({
      name,
      email,
      company,
      password: hashedPassword,
    });

    /**
     * Save it
     */
    const result = await addNewUser.save();

    /**
     * Add refer user, if refered by someone
     */
    if (referedBy) {
      const countRefered = await Users.findById(referedBy);
      countRefered?.refered.push(result._id);
      await countRefered?.save();
    }

    return {
      __typename: "UserResult",
      ...result._doc,
      _id: result._id,
      password: "null",
    };
  },
};
