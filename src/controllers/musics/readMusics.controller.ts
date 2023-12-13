import { Request, Response } from "express";
import readMusicsService from "../../services/musics/readMusics.service";
import { AppError } from "../../errors/appError";

async function readMusicsController(request: Request, response: Response) {
  try {
    const musicsList = await readMusicsService();

    return response.json(musicsList);
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default readMusicsController;
