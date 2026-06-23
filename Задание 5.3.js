const fwConfig = {
    _timeout: 5000,

    set timeout(value) {
    if (typeof value !== 'number' || value < 0) {
    throw new Error('Некорректный таймаут') };
this._timeout = value },

get timeout() {
    return `Текущий таймаут: ${this._timeout} мс.`},
};

fwConfig.timeout = 10000;

console.log(fwConfig.timeout)