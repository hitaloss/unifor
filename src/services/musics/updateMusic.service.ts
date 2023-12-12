import AppDataSource from "../../data-source";
import { Music } from "../../entities/musics.entity";
import { AppError } from "../../errors/appError";
import { IMusicPatch } from "../../interface/musics";

async function updateMusicService(
  id: string,
  { name, artist }: IMusicPatch
): Promise<Music> {
  const musicRepository = AppDataSource.getRepository(Music);

  if (!name && !artist) throw new AppError(403, "Missing body params");

  const music = await musicRepository.findOneBy({ id });
  if (!music) throw new AppError(404, "Music not found");

  const musicData = {
    name: name ? name : music.name,
    artist: artist ? artist : music.artist,
  };

  await musicRepository.update(id, musicData);

  const updatedMusic = await musicRepository.findOneBy({ id });
  if (!updatedMusic) throw new AppError(404, "Music not found");

  return updatedMusic;
}

export default updateMusicService;
