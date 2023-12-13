import { Request, Response } from "express";
import readPlaylistsService from "../../services/playlists/readPlaylists.service";
import { AppError } from "../../errors/appError";

async function readPlaylistsController(request: Request, response: Response) {
  try {
    const playLists = await readPlaylistsService();

    return response.json(playLists);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default readPlaylistsController;
