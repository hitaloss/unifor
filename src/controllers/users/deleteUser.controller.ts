import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

async function deleteUserController(request: Request, response: Response) {
  const { id } = request.params;

  const deletedUser = await deleteUserService(id);

  return response.json({ message: deletedUser });
}

export default deleteUserController;
