import { Router } from "express";
import createPlaylistController from "../controllers/playlists/createPlaylist.controller";
import readPlaylistsController from "../controllers/playlists/readPlaylists.controller";
import updatePlaylistController from "../controllers/playlists/updatePlaylist.controller";
import addMusicPlaylistController from "../controllers/playlists/addMusicPlaylist.controller";
import removeMusicPlaylistController from "../controllers/playlists/removeMusicPlaylist.controller";
import deletePlaylistController from "../controllers/playlists/deletePlaylist.controller";

const routes = Router();

export function playlistsRoutes() {
  routes.post("", createPlaylistController);
  routes.get("", readPlaylistsController);
  routes.patch("/:id", updatePlaylistController);
  routes.patch("/:id", addMusicPlaylistController);
  routes.patch("/:id", removeMusicPlaylistController);
  routes.delete("/:id", deletePlaylistController);
  return routes;
}
