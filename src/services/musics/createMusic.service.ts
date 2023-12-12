import AppDataSource from "../../data-source";
import { Music } from "../../entities/musics.entity";
import { AppError } from "../../errors/appError";
import { IMusicRequest } from "../../interface/musics";

async function createMusicService({
  name,
  artist,
}: IMusicRequest): Promise<Music> {
  const musicRepository = AppDataSource.getRepository(Music);

  if (!name || !artist) throw new AppError(403, "Missing body params");

  const newMusic = musicRepository.create({
    name: name,
    artist: artist,
  });
  await musicRepository.save(newMusic);

  return newMusic;
}

export default createMusicService;
