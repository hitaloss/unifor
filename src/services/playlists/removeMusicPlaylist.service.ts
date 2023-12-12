import { Music } from "../../entities/musics.entity";
import { Playlist } from "../../entities/playlists.entity";
import { AppError } from "../../errors/appError";
import { IPlaylistSetSong } from "../../interface/playlists";
import AppDataSource from "../../data-source";

async function removeMusicToPlaylistService(
  id: string,
  { musicId }: IPlaylistSetSong
): Promise<Playlist> {
  const playlistRepository = AppDataSource.getRepository(Playlist);
  const musicRepository = AppDataSource.getRepository(Music);

  const music = await musicRepository.findOneBy({ id: musicId });
  if (!music) throw new AppError(404, "Music not found");

  const playlist = await playlistRepository.findOne({
    where: { id: id },
    relations: ["musics"],
  });
  if (!playlist) throw new AppError(404, "Playlist not found");

  const index = playlist.musics.findIndex((music) => music.id === musicId);

  playlist.musics.splice(index, 1);

  const updatedPlaylist = await playlistRepository.save(playlist);

  return updatedPlaylist;
}

export default removeMusicToPlaylistService;
