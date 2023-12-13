import AppDataSource from "../../data-source";
import { Music } from "../../entities/musics.entity";
import { AppError } from "../../errors/appError";

async function deleteMusicService(id: string): Promise<string> {
  const musicRepository = AppDataSource.getRepository(Music);

  const music = await musicRepository.findOneBy({ id });
  if (!music) throw new AppError(404, "Music not found");

  await musicRepository.delete(id);

  return "Music deleted successfully";
}

export default deleteMusicService;
