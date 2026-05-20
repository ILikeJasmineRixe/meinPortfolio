const staticPath = "public";

const server = Bun.serve({
  port: 6969,
  fetch(req) {
      const url = new URL(req.url);
      const file = Bun.file(`./${staticPath}${url.pathname}`);

      if (url.pathname === "/") {
        return new Response(Bun.file(`./${staticPath}/index.html`));
      }

      if (file.size > 0) {
        return new Response(file);
      }

      return new Response(Bun.file(`./${staticPath}/404.html`));
  },
});

console.log(`Listening on ${server.url}`);