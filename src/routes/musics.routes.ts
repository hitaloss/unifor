import { Router } from "express";
import readMusicsController from "../controllers/musics/readMusics.controller";
import createMusicController from "../controllers/musics/createMusic.controller";
import updateMusicController from "../controllers/musics/updateMusic.controller";
import deleteMusicController from "../controllers/musics/deleteMusic.controller";

const routes = Router();

export function musicsRoutes() {
  routes.get("", readMusicsController);
  routes.post("", createMusicController);
  routes.patch("/:id", updateMusicController);
  routes.delete("/:id", deleteMusicController);
  return routes;
}
