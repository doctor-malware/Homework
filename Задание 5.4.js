class BasePage {
    static environment = 'QA';

    open(url) {
        console.log(`Открываю страницу: [${url}] на окружении [${BasePage.environment}].`);
    }
}

class LoginPage extends BasePage {
    #passwordInput;
    constructor() {
        super();
        this.loginInput = '#user';
        this.#passwordInput = '#pass';
    }

    fillForm(user, password) {
        console.log(`Вводим логин [${user}] в поле [${this.loginInput}].`);
        console.log(`Вводим пароль [${password}] в поле [${this.#passwordInput}].`);
    }
}

const page = new LoginPage();
page.open('https://test.com/login');
page.fillForm('admin', '12345');