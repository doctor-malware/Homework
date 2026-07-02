import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
});

test('So zvezdochkoy', async ({ page }) => {
  await expect(page).toHaveTitle('demosite');

  const expandAll = await page.locator('[class="rc-tree-switcher rc-tree-switcher_close"]');
  await expect(expandAll).toBeVisible();
  await expandAll.click();

  const checkboxDesktop = await page.locator('[aria-label="Select Desktop"]');
  await expect(checkboxDesktop).toBeVisible();
  await checkboxDesktop.click();

  const SuccessMessage = await page.locator('[class="display-result mt-4"]');
    await expect(SuccessMessage).toBeVisible();
});