import { Request, Response } from "express"
import createUserService from "../../services/users/createUser.service";

async function createUserController(request: Request, response: Response) {
  const { name, age } = request.body;

  const createUser = await createUserService({ name, age });

  return response.status(201).json(createUser);
}

export default createUserController;
