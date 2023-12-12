import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interface/users";

async function createUserService({ name, age }: IUserRequest): Promise<User>  {
  const userRepository = AppDataSource.getRepository(User);

  if(!name || !age) throw new AppError(403, "Missing body params")

  const newUser = userRepository.create({
    name,
    age,
  })
  await userRepository.save(newUser)

  return newUser
}

export default createUserService;
