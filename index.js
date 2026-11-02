import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function revision(ref) {
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}

export async function readRepoFile(path) {
  return readFile(resolve(".", path), "utf8");
}
