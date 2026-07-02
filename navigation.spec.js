import { test, expect } from '@playwright/test';

test('Trying out Playwright', async ({ page }) => {
  await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle('demosite');
});