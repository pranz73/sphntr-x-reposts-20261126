import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "POSTS.json");
const outputDir = "/output";
const outputPath = join(outputDir, "POSTS.json");

mkdirSync(outputDir, { recursive: true });

const content = readFileSync(sourcePath);
writeFileSync(outputPath, content);

console.log(`Wrote ${outputPath}`);
