import assert from "node:assert/strict";
import test from "node:test";
import { revision, mergeOptions } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /initial/);
});

test("merges option overrides", () => {
  assert.deepEqual(mergeOptions({ depth: 1 }, { depth: 2, grep: { extended: true } }), {
    depth: 2,
    grep: { extended: true },
  });
});
