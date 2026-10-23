# Bun Hono React Streams Minimal Example

To run:

- `bun dev`
- open browser to http://localhost:3000/api/stream

## To Do

Start from a `bun init .` and don't totally replace
all the code from the deepseek AI but just port in the
code to the `init` setup.

## Creation History

Asked deepseek the code in this repo.

- can you provide the minimal javascript code for the server
  using hono and client using react that demonstrates streaming
- ' how would you use bun js to init the project and store the code
  in `./src/client` and `./src/server` for the client and server
  code respectively

## Code History

```bash
mkdir bun-hono-stream
cd bun-hono-stream
bun init .
bun add hono react react-dom
bun add -d @types/react @types/react-dom
bun add -d concurrently
bun add @hono/bun
```
