const { test, expect } = require("@playwright/test");

test("Test 1", async ({ }) => {
  await expect(true).toBe(true);
});

test("Test 2", async ({ }) => {
  await expect(true).toBe(true);
});

test("Test 3", async ({ }) => {
  await expect(true).toBe(false);
});

test("Test 4", async ({ }) => {
  await expect(true).toBe(true);
});
