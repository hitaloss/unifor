import { Request, Response } from "express";
import createPlaylistService from "../../services/playlists/createPlaylist.service";
import { AppError } from "../../errors/appError";

async function createPlaylistController(request: Request, response: Response) {
  try {
    const { name, userId } = request.body;

    const createPlaylist = await createPlaylistService({ name, userId });

    return response.status(201).json(createPlaylist);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default createPlaylistController;
