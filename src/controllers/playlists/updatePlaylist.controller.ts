import { Request, Response } from "express";
import updatePlaylistService from "../../services/playlists/updatePlaylist.service";

async function updatePlaylistController(request: Request, response: Response) {
  const { id } = request.params;
  const { name } = request.body;

  const updatedPlaylist = await updatePlaylistService(id, { name });

  return response.json(updatedPlaylist);
}

export default updatePlaylistController;
