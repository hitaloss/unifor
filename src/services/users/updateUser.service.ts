import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IUserPatch } from "../../interface/users";

async function updateUserService(
  id: string,
  { name, age }: IUserPatch
): Promise<User> {
  const userRepository = AppDataSource.getRepository(User);

  if (!name && !age) throw new AppError(403, "Missing body params");

  const user = await userRepository.findOneBy({ id });
  if (!user) throw new AppError(404, "User not found");

  const updatedUserData = {
    name: name ? name : user.name,
    age: age ? age : user.age,
  };

  await userRepository.update(id, updatedUserData);

  const userChanges = await userRepository.findOneBy({ id });
  if (!userChanges) throw new AppError(404, "User not found");

  return userChanges;
}

export default updateUserService;
