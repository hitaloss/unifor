import AppDataSource from "../../data-source";
import { Playlist } from "../../entities/playlists.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IPlaylistRequest } from "../../interface/playlists";

async function createPlaylistService({
  name,
  userId,
}: IPlaylistRequest): Promise<Playlist> {
  const playlistRepository = AppDataSource.getRepository(Playlist);
  const userRepository = AppDataSource.getRepository(User);

  if (!name) throw new AppError(403, "Missing body params");

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError(404, "User not found");

  const newPlaylist = playlistRepository.create({
    name: name,
    user: user,
  });
  await playlistRepository.save(newPlaylist);

  return newPlaylist;
}

export default createPlaylistService;
