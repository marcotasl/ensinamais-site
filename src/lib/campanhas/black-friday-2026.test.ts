import assert from "node:assert/strict";
import { test } from "node:test";
import { isBlackFriday2026 } from "./black-friday-2026.ts";

const at = (iso: string) => Date.parse(iso);

test("fora antes de 26/11 00:00 BRT", () => {
  assert.equal(isBlackFriday2026(at("2026-11-25T23:59:59.999-03:00")), false);
});

test("entra em 26/11 00:00 BRT", () => {
  assert.equal(isBlackFriday2026(at("2026-11-26T00:00:00-03:00")), true);
});

test("segue no ar em 30/11 23:59:59 BRT", () => {
  assert.equal(isBlackFriday2026(at("2026-11-30T23:59:59.999-03:00")), true);
});

test("sai em 01/12 00:00 BRT (03:00 UTC)", () => {
  assert.equal(isBlackFriday2026(at("2026-12-01T00:00:00-03:00")), false);
  assert.equal(isBlackFriday2026(at("2026-12-01T02:59:59.999Z")), true);
  assert.equal(isBlackFriday2026(at("2026-12-01T03:00:00Z")), false);
});
