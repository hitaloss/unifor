import { Request, Response } from "express";
import deleteMusicService from "../../services/musics/deleteMusic.service";
import { AppError } from "../../errors/appError";

async function deleteMusicController(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const deleteMusic = await deleteMusicService(id);

    return response.json({ message: deleteMusic });
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.statusCode, error.message);
    }
  }
}

export default deleteMusicController;
