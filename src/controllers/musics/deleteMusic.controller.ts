import { Request, Response } from "express";
import deleteMusicService from "../../services/musics/deleteMusic.service";

async function deleteMusicController(request: Request, response: Response) {
  const { id } = request.params;

  const deleteMusic = await deleteMusicService(id);

  return response.json({ message: deleteMusic });
}

export default deleteMusicController;
