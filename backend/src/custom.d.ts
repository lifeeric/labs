declare namespace Express {
  export interface Request {
    isAuth: boolean;
    userId: string;
  }
}

declare module "nodejs-unique-numeric-id-generator";
