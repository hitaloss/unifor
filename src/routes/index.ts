import { Express } from "express";
import { userRoutes } from "./users.routes";
import { playlistsRoutes } from "./playlists.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/playlists", playlistsRoutes());
};
