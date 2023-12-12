import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

async function readUsersService(): Promise<User[]>  {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = await userRepository.find()

  return newUser
}

export default readUsersService;
