import {
  throwError,
  testsTemplate,
  transformObjectToDocument,
} from "../../../Helper/";

export const getTemplate = {
  getTestTemplate: async (parent: any, args: any, context: any, info: any) => {
    /**
     * Simplify
     */
    const { id } = args;
    const { isAuth, userId } = context.Auth;

    console.log(isAuth, userId);

    /**
     * Authenticating user
     */
    if (!!!isAuth && id !== userId) return throwError("Token is invalid!");

    /**
     * Return Response
     */
    return testsTemplate.map((tst) => ({
      __typename: "GenTemplateResult",
      ...tst,
    }));
  },
};
