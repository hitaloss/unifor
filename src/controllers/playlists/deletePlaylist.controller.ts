import { Request, Response } from "express";
import deletePlaylistService from "../../services/playlists/deletePlaylist.service";
import { AppError } from "../../errors/appError";

async function deletePlaylistController(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const deletedPlaylist = await deletePlaylistService(id);

    return response.json({ message: deletedPlaylist });
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default deletePlaylistController;
