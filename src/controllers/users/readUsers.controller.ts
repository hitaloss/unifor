import { Request, Response } from "express";
import readUsersService from "../../services/users/readUsers.service";

async function readUsersController(request: Request, response: Response) {
  const readUser = await readUsersService();

  return response.json(readUser);
}

export default readUsersController;
