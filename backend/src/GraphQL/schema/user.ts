import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    login(email: String!, password: String!): LoginUnion!
    # forgotPassword(email: String!): ForgotPassUnion!
    forgotPassword(email: String!): Error!
    userSetting(id: ID!): UserSettingUnion!
  }

  union LoginUnion = LoginUserResult | Error

  type LoginUserResult {
    _id: ID!
    email: String!
    token: String!
  }

  # union ForgotPassUnion = ForgetPassordResult | Error

  type ForgetPassordResult {
    id: ID!
    email: String!
    token: String!
  }

  union UserSettingUnion = GetUserSettingResult | Error

  type GetUserSettingResult {
    id: ID!
    name: String!
    email: String!
    company: String
    refered: [GetReferedResult]
  }

  type GetReferedResult {
    company: String!
    name: String!
  }

  extend type Mutation {
    createUser(user: addNewUser): UserUnion!
    resetPassword(
      id: ID!
      validateURL: Boolean
      password: String
      passwordAgain: String
    ): Error!
    updateUserSetting(
      id: ID!
      name: String!
      email: String!
      company: String!
    ): UserSettingUnion!
    updatePassword(
      id: ID!
      oldPassword: String!
      newPassword: String!
      newPasswordAgain: String!
    ): Error!
  }

  union UserUnion = UserResult | Error

  input addNewUser {
    name: String!
    email: String!
    password: String!
    company: String
    referedBy: ID
  }

  type UserResult {
    _id: ID!
    name: String!
    email: String!
    password: String
    company: String
  }
`;
