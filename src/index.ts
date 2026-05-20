const staticPath = "public";

const server = Bun.serve({
  port: 6969,
  fetch(req) {
    /*
    const filePath = staticPath + new URL(req.url).pathname;
    const file = Bun.file(filePath);
    return new Response(file)
    */
      const url = new URL(req.url);
      
      if (url.pathname === "/") {
        return new Response(Bun.file(`./${staticPath}/index.html`));
      }
      
      if (url.pathname.startsWith(staticPath)) {
        const file = Bun.file(url.pathname.slice(1));
        if (file.size === 0) {
          throw new Error("File not found");
        }
        return new Response(file);
      }
      
      return new Response(Bun.file(`./${staticPath}/404.html`));
  },
});

console.log(`Listening on ${server.url}`);