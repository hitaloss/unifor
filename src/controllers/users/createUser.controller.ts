import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { AppError } from "../../errors/appError";

async function createUserController(request: Request, response: Response) {
  try {
    const { name, age } = request.body;

    const createUser = await createUserService({ name, age });

    return response.status(201).json(createUser);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default createUserController;
