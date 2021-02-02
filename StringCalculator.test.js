const { TestScheduler } = require('jest');
const StringCalculator = require('./StringCalculator');

test('check if StringCalculator object is created', () => {
    expect(new StringCalculator()).toBeInstanceOf(StringCalculator);
});

test('check if return is a number', () => {
    const value = new StringCalculator().add("");
    expect(typeof value).toBe("number");
});

test('trivial empty string', () => {
    const value = new StringCalculator().add("");
    expect(value).toBe(0);
});

test('string with a single value', () => {
    const value = new StringCalculator().add("1");
    expect(value).toBe(1);
});

test('string with two values', () => {
    const value = new StringCalculator().add("1,2");
    expect(value).toBe(3);
});

test('handle new lines', () => {
    const value = new StringCalculator().add("1\n2,3");
    expect(value).toBe(6);
});
