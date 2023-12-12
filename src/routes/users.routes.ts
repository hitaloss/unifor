import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import readUsersController from "../controllers/users/readUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

const routes = Router();

export function userRoutes() {
  routes.post("", createUserController);
  routes.get("", readUsersController);
  routes.patch("/:id", updateUserController);
  routes.delete("/:id", deleteUserController);
  return routes;
}
