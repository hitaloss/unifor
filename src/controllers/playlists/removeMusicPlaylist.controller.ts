import { Request, Response } from "express";
import removeMusicToPlaylistService from "../../services/playlists/removeMusicPlaylist.service";
import { AppError } from "../../errors/appError";

async function removeMusicPlaylistController(
  request: Request,
  response: Response
) {
  try {
    const { id } = request.params;
    const { musicId } = request.body;

    const updatedPlaylist = await removeMusicToPlaylistService(id, { musicId });

    return response.json(updatedPlaylist);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default removeMusicPlaylistController;
