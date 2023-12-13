import { Router } from "express";
import createPlaylistController from "../controllers/playlists/createPlaylist.controller";
import readPlaylistsController from "../controllers/playlists/readPlaylists.controller";
import updatePlaylistController from "../controllers/playlists/updatePlaylist.controller";
import addMusicPlaylistController from "../controllers/playlists/addMusicPlaylist.controller";
import removeMusicPlaylistController from "../controllers/playlists/removeMusicPlaylist.controller";
import deletePlaylistController from "../controllers/playlists/deletePlaylist.controller";

const routes = Router();

export function playlistsRoutes() {
  routes.get("", readPlaylistsController);
  routes.post("", createPlaylistController);
  routes.patch("/:id", updatePlaylistController);
  routes.patch("/addmusic/:id", addMusicPlaylistController);
  routes.patch("/removemusic/:id", removeMusicPlaylistController);
  routes.delete("/:id", deletePlaylistController);
  return routes;
}
