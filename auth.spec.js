import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
});

test('Successful login', async ({ page }) => {
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    const loginButton = await page.locator('[data-test="login-button"]');
    await expect(loginButton).toBeVisible();
    await loginButton.click();
    await expect(page).toHaveURL(/inventory.html/);
});