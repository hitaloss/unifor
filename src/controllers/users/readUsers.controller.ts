import { Request, Response } from "express";
import readUsersService from "../../services/users/readUsers.service";
import { AppError } from "../../errors/appError";

async function readUsersController(request: Request, response: Response) {
  try {
    const readUser = await readUsersService();

    return response.json(readUser);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default readUsersController;
