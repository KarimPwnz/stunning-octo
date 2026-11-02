import assert from "node:assert/strict";
import test from "node:test";
import { revision, readRepoFile } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /initial/);
});

test("reads a repo file", async () => {
  assert.match(await readRepoFile("package.json"), /stunning-octo/);
});
