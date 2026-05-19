const path = "./public/index.html";
const file = Bun.file(path);
// const resp = new Response(file);

const server = Bun.serve({
  port: 6969,
  async fetch(req) {
    return new Response(file);
  },
});

console.log(`Listening on ${server.url}`);