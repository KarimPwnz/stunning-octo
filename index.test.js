import assert from "node:assert/strict";
import test from "node:test";
import { revision, isValidRef } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /^[0-9a-f]{7} /);
});

test("accepts valid refs", () => {
  assert.equal(isValidRef("main"), true);
  assert.equal(isValidRef("feature/new-parser"), true);
  assert.equal(isValidRef("v1.2.3"), true);
});

test("rejects invalid refs", () => {
  assert.equal(isValidRef(""), false);
  assert.equal(isValidRef("bad ref"), false);
  assert.equal(isValidRef("-n"), false);
});
