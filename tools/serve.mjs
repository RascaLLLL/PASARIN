import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};
const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }
  const filename = path.resolve(
    root,
    "." + pathname + (pathname.endsWith("/") ? "index.html" : ""),
  );
  if (!filename.startsWith(root + path.sep)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  if (
    pathname.startsWith("/tmp/") ||
    pathname.startsWith("/tools/") ||
    pathname.startsWith("/tests/")
  ) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  fs.stat(filename, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(path.join(root, "404.html")).pipe(res);
      return;
    }
    const stableAsset =
      /\.(png|jpe?g|webp|svg|woff2?|ttf)$/i.test(filename) ||
      pathname.startsWith("/assets/vendor/");
    const etag = `"${stat.size.toString(16)}-${Math.trunc(stat.mtimeMs).toString(16)}"`;
    const headers = {
      "Content-Type":
        mime[path.extname(filename)] || "application/octet-stream",
      "Cache-Control": stableAsset ? "public, max-age=86400" : "no-cache",
      ETag: etag,
      "Last-Modified": stat.mtime.toUTCString(),
      "X-Content-Type-Options": "nosniff",
    };
    if (req.headers["if-none-match"] === etag) {
      res.writeHead(304, headers);
      res.end();
      return;
    }
    res.writeHead(200, { ...headers, "Content-Length": stat.size });
    if (req.method === "HEAD") res.end();
    else fs.createReadStream(filename).pipe(res);
  });
});
server.listen(port, "127.0.0.1", () =>
  console.log(`PASARIN Local: http://127.0.0.1:${port}`),
);
process.on("SIGINT", () => server.close(() => process.exit(0)));
