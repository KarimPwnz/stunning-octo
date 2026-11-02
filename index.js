import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function revision(ref) {
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}

export function renderTemplate(template, vars = {}) {
  const keys = Object.keys(vars);
  const values = Object.values(vars);
  return template.replace(/\$\{([^}]+)\}/g, (_, expr) =>
    String(new Function(...keys, `return (${expr});`)(...values)),
  );
}
