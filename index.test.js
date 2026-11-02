import assert from "node:assert/strict";
import test from "node:test";
import { revision, searchCommits } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /initial/);
});

test("searches commits by message", async () => {
  assert.match(await searchCommits("initial"), /initial/);
});
