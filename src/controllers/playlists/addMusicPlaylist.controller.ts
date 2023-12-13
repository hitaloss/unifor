import { Request, Response } from "express";
import addMusicToPlaylistService from "../../services/playlists/addMusicPlaylist.service";
import { AppError } from "../../errors/appError";

async function addMusicPlaylistController(
  request: Request,
  response: Response
) {
  try {
    const { id } = request.params;
    const { musicId } = request.body;

    const updatedPlaylist = await addMusicToPlaylistService(id, { musicId });

    return response.json(updatedPlaylist);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default addMusicPlaylistController;
