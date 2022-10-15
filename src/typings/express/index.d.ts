import { users } from "../../../database/models/users";

declare global {
  namespace Express {
    interface User extends users {}
  }
}