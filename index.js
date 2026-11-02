import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function revision(ref) {
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}

export function mergeOptions(base, overrides) {
  const out = { ...base };
  for (const [key, value] of Object.entries(overrides)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      out[key] = mergeOptions(out[key] ?? {}, value);
    } else {
      out[key] = value;
    }
  }
  return out;
}
