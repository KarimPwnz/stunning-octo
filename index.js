import { exec, execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const runShell = promisify(exec);

export async function revision(ref) {
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}

export async function searchCommits(query) {
  const { stdout } = await runShell(`git log --oneline --grep="${query}"`);
  return stdout;
}
