const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await expect(page).toHaveTitle(/Your Store/);
});
