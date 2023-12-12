import { Request, Response } from "express"
import updateUserService from "../../services/users/updateUser.service";

async function updateUserController(request: Request, response: Response) {
  const { id } = request.params
  const { name, age } = request.body;

  const updatedUser = await updateUserService(id, { name, age });

  return response.json(updatedUser);
}

export default updateUserController;
