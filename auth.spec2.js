import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
});

test('Successful login', async ({ page }) => {
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret');

    const loginButton = await page.locator('[data-test="login-button"]');
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    const ErrorMessage = await page.locator('[data-test="error"]');
    await expect(ErrorMessage).toBeVisible();
    await expect(ErrorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");
});