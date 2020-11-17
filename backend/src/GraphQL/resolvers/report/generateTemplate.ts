import { promises as fs } from "fs";
import path from "path";
import { testsTemplate, throwError } from "../../../Helper/";
import ID from "nodejs-unique-numeric-id-generator";

export const generateTemplate = {
  generateTemplate: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const {
      add: { id, name, test },
    } = args;
    const { isAuth, userId, isAdmin } = context.Auth;

    const testid = ID.generate(new Date().toJSON()); // output: "118626"

    /**
     * Authorization as Admin and logged in user
     */
    if (!!!isAuth || !isAdmin)
      return throwError("You're not allowed to perform this action!");

    /**
     * Saving new template data to file
     */
    const newData = [...testsTemplate, { id: Number(testid), name, test }];
    const data = `export const testsTemplate = ${JSON.stringify(newData)};`;
    const file = await fs.writeFile(
      path.join(__dirname, "../../../Helper/tests.ts"),
      data
    );

    console.log(file);

    // console.log(id, name, test);
    return {
      __typename: "GenTemplateResult",
      id: testid,
      name,
      test,
    };
  },
};
