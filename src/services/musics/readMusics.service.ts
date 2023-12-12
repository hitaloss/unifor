import AppDataSource from "../../data-source";
import { Music } from "../../entities/musics.entity";

async function readMusicsService(): Promise<Music[]> {
  const musicRepository = AppDataSource.getRepository(Music);

  const musicsList = await musicRepository.find();

  return musicsList;
}

export default readMusicsService;
