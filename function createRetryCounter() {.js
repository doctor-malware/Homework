function createRetryCounter() {
    let attempts = 0;
    return function() {
        attempts++;
        return 'Попытка запуска: ${attempts}';
    };
}
const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();
for (let i = 0; i < 3; i++) {
console.log(loginRetry());
}
console.log(paymentRetry());