import { Request, Response } from "express";
import updatePlaylistService from "../../services/playlists/updatePlaylist.service";
import { AppError } from "../../errors/appError";

async function updatePlaylistController(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const { name } = request.body;

    const updatedPlaylist = await updatePlaylistService(id, { name });

    return response.json(updatedPlaylist);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default updatePlaylistController;
