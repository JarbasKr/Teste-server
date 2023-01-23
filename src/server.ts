//Back-end API RESTful

//localhost:3333/habits
//metodo HTTP: get, post, put, patch

import Fastify from "fastify";
import cors from "@Fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Http server running");
  });
