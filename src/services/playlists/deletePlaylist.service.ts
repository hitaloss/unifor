import { Playlist } from "../../entities/playlists.entity";
import { AppError } from "../../errors/appError";
import AppDataSource from "../../data-source";

async function deletePlaylistService(id: string): Promise<string> {
  const playlistRepository = AppDataSource.getRepository(Playlist);

  const playlist = await playlistRepository.findOneBy({ id });
  if (!playlist) throw new AppError(404, "Playlist not found");

  await playlistRepository.delete(id);

  return "Playlist deleted successfully";
}

export default deletePlaylistService;
