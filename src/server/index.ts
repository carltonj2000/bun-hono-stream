import { Hono } from "hono";
import { streamText } from "hono/streaming";
import { serveStatic } from "@hono/bun";

const app = new Hono();

app.use("/*", serveStatic({ root: "./dist" }));

app.get("/api/stream", (c) => {
  return streamText(c, async (stream) => {
    await stream.writeln("Hello");
    await stream.sleep(1000);
    await stream.writeln(" from");
    await stream.sleep(1000);
    await stream.writeln(" Hono!");
  });
});

export default {
  port: 3000,
  fetch: app.fetch,
};
