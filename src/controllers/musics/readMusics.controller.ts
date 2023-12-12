import { Request, Response } from "express";
import readMusicsService from "../../services/musics/readMusics.service";

async function readMusicsController(request: Request, response: Response) {
  const musicsList = await readMusicsService();

  return response.json(musicsList);
}

export default readMusicsController;
