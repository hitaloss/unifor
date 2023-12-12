import AppDataSource from "../../data-source";
import { Playlist } from "../../entities/playlists.entity";
import { AppError } from "../../errors/appError";
import { IPlaylistPatch } from "../../interface/playlists";

async function updatePlaylistService(
  id: string,
  { name }: IPlaylistPatch
): Promise<Playlist> {
  const playlistRepository = AppDataSource.getRepository(Playlist);

  if (!name) throw new AppError(403, "Missing body params");

  const playlist = await playlistRepository.findOneBy({ id });
  if (!playlist) throw new AppError(404, "Playlist not found");

  const updatedPlaylist = await playlistRepository.update(id, { name });

  return { ...playlist, ...updatedPlaylist };
}

export default updatePlaylistService;
