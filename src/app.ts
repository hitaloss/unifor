import express from "express";
import { appRoutes } from "./routes";
import errorMiddleware from "./middlewares/errors.middleware";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

appRoutes(app);

app.use(errorMiddleware);

export default app;
