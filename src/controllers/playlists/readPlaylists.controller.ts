import { Request, Response } from "express";
import readPlaylistsService from "../../services/playlists/readPlaylists.service";

async function readPlaylistsController(request: Request, response: Response) {
  const playLists = await readPlaylistsService();

  return response.json(playLists);
}

export default readPlaylistsController;
