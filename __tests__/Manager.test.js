const Manager = require('../lib/Manager.js');

test('Can get get office number via constructor', () => {
    const testVal = 50;
    const e = new Manager('example', 1, 'example@test.com', testVal);
    expect(e.officeNumber).toBe(testVal);
});

test('getRole should return \'Manager\'', () => {
    const testVal = 'Manager';
    const e = new Manager('example', 1, 'example@test.com', 50);
    expect(e.getRole()).toBe(testVal);
});

test('Get office number via getOfficeNumber', () => {
    const testVal = 50;
    const e = new Manager('example', 1, 'example@test.com', testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});