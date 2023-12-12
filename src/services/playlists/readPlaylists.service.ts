import AppDataSource from "../../data-source";
import { Playlist } from "../../entities/playlists.entity";

async function readPlaylistsService(): Promise<Playlist[]> {
  const playlistRepository = AppDataSource.getRepository(Playlist);

  const playlists = await playlistRepository.find();

  return playlists;
}

export default readPlaylistsService;
