import assert from "node:assert/strict";
import test from "node:test";
import { revision, renderTemplate } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /^[0-9a-f]{7} /);
});

test("renders a template", () => {
  assert.equal(
    renderTemplate("${hash} changed ${files} file(s)", { hash: "c9293f1", files: 2 }),
    "c9293f1 changed 2 file(s)",
  );
});
