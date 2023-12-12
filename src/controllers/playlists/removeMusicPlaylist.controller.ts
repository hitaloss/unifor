import { Request, Response } from "express";
import removeMusicToPlaylistService from "../../services/playlists/removeMusicPlaylist.service";

async function removeMusicPlaylistController(
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const { musicId } = request.body;

  const updatedPlaylist = await removeMusicToPlaylistService(id, { musicId });

  return response.json(updatedPlaylist);
}

export default removeMusicPlaylistController;
