import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";
import { AppError } from "../../errors/appError";

async function updateUserController(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const { name, age } = request.body;

    const updatedUser = await updateUserService(id, { name, age });

    return response.json(updatedUser);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default updateUserController;
