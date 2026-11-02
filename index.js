import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

const REF_PATTERN = /^([A-Za-z0-9_][A-Za-z0-9_.-]*(\/[A-Za-z0-9_][A-Za-z0-9_.-]*)*)+$/;

export function isValidRef(ref) {
  return REF_PATTERN.test(ref);
}

export async function revision(ref) {
  if (!isValidRef(ref)) throw new Error(`Invalid ref: ${ref}`);
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}
