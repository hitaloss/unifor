import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

async function deleteUserService(id: string): Promise<string>  {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });
  if (!user) throw new AppError(404, "User not found")

  await userRepository.delete(id)

  return "User deleted successfully"
}

export default deleteUserService;
