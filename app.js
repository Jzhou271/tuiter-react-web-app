import express from 'express';
import cors from 'cors';
import HelloController from "./controller/hello-controller.js";
import UserController from './controller/users/users-controller.js';
import tuitsController from './controller/tuits/tuits-controller.js';
const app = express()
app.use(express.json());
app.use(cors())

HelloController(app);
UserController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);