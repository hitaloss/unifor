import { Request, Response } from "express";
import updateMusicService from "../../services/musics/updateMusic.service";
import { AppError } from "../../errors/appError";

async function updateMusicController(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const { name, artist } = request.body;

    const updatedMusic = await updateMusicService(id, { name, artist });

    return response.json(updatedMusic);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default updateMusicController;
