import { Request, Response } from "express";
import deletePlaylistService from "../../services/playlists/deletePlaylist.service";

async function deletePlaylistController(request: Request, response: Response) {
  const { id } = request.params;

  const deletedPlaylist = await deletePlaylistService(id);

  return response.json({ message: deletedPlaylist });
}

export default deletePlaylistController;
