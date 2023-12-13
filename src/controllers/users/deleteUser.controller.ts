import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";
import { AppError } from "../../errors/appError";

async function deleteUserController(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const deletedUser = await deleteUserService(id);

    return response.json({ message: deletedUser });
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default deleteUserController;
