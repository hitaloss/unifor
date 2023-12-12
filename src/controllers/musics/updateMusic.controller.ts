import { Request, Response } from "express";
import updateMusicService from "../../services/musics/updateMusic.service";

async function updateMusicController(request: Request, response: Response) {
  const { id } = request.params;
  const { name, artist } = request.body;

  const updatedMusic = await updateMusicService(id, { name, artist });

  return response.json(updatedMusic);
}

export default updateMusicController;
