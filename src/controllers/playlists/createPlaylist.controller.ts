import { Request, Response } from "express";
import createPlaylistService from "../../services/playlists/createPlaylist.service";

async function createPlaylistController(request: Request, response: Response) {
  const { name, userId } = request.body;

  const createPlaylist = await createPlaylistService({ name, userId });

  return response.status(201).json(createPlaylist);
}

export default createPlaylistController;
