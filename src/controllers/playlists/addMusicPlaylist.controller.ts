import { Request, Response } from "express";
import addMusicToPlaylistService from "../../services/playlists/addMusicPlaylist.service";

async function addMusicPlaylistController(
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const { musicId } = request.body;

  const updatedPlaylist = await addMusicToPlaylistService(id, { musicId });

  return response.json(updatedPlaylist);
}

export default addMusicPlaylistController;
