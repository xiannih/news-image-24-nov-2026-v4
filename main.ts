// V4 entry for "Sum up 24 November's world news in one image" (news-image-20261124).
// Written from scratch in this session. Node 22, standard library only, no network.
// Copies the bundled entry.png (a newspaper front page of 24 Nov 2026 world news,
// drawn with plain shapes) to the output directory, fresh, every run.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(source);
if (bytes.length < 8 || bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error("entry.png is not a PNG");
}
if (bytes.length > 1048576) {
  throw new Error("entry.png is over 1 MiB");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error("entry.png is over 1024x1024");
}
writeFileSync(join(outDir, "entry.png"), bytes);
console.log(`wrote entry.png (${width}x${height}, ${bytes.length} bytes) to ${outDir}`);
