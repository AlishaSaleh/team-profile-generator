const Intern = require('../lib/Intern.js');

test('Can get school via constructor', () => {
    const testVal = 'UoB';
    const e = new Intern('example', 1, 'example@test.com', testVal);
    expect(e.school).toBe(testVal);
});

test('getRole should return \'Intern\'', () => {
    const testVal = 'Intern';
    const e = new Intern('example', 1, 'example@test.com', 'UoB');
    expect(e.getRole()).toBe(testVal);
});

test('Get school via getSchool', () => {
    const testVal = 'UoB';
    const e = new Intern('example', 1, 'example@test.com', testVal);
    expect(e.getSchool()).toBe(testVal);
});