import { Request, Response } from "express";
import createMusicService from "../../services/musics/createMusic.service";

async function createMusicController(request: Request, response: Response) {
  const { name, artist } = request.body;

  const createMusic = await createMusicService({ name, artist });

  return response.status(201).json(createMusic);
}

export default createMusicController;
