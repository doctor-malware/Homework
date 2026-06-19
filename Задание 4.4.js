const logLocators = (...locators) => {
    console.log(`Готовы к работе: ${locators.length} локаторов. Список: ${locators.join(', ')}`);
};
logLocators('.btn-login', '#password', '[name="submit"]');