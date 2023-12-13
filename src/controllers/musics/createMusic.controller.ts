import { Request, Response } from "express";
import createMusicService from "../../services/musics/createMusic.service";
import { AppError } from "../../errors/appError";

async function createMusicController(request: Request, response: Response) {
  try {
    const { name, artist } = request.body;

    const createMusic = await createMusicService({ name, artist });

    return response.status(201).json(createMusic);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default createMusicController;
