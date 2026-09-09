import test from "node:test";
import assert from "node:assert/strict";
import {app} from "./index";

test("server can be started", async () => {
  await new Promise<void>(resolve => app.listen(0, resolve));
  const address = app.address();
  assert.ok(address && typeof address === "object" && address.port > 0);
  app.close();
});
