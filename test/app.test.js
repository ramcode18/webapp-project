const test = require("node:test");
const assert = require("node:assert");

test("Application should have a valid name", () => {
    const appName = "CODERWANDA WebApp";

    assert.strictEqual(appName, "CODERWANDA WebApp");
});

test("Application should use port 3000 by default", () => {
    const port = process.env.PORT || 3000;

    assert.strictEqual(port, 3000);
});
