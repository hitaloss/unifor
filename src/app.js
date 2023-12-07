import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

appRoutes(app);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use(errorMiddleware);

app.listen(3000);
