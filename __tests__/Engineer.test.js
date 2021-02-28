const Engineer = require('../lib/Engineer.js');

test('Can get GitHub account via constructor', () => {
    const testVal = 'GitHub';
    const e = new Engineer('example', 1, 'example@test.com', testVal);
    expect(e.github).toBe(testVal);
});

test('getRole should return \'Engineer\'', () => {
    const testVal = 'Engineer';
    const e = new Engineer('example', 1, 'example@test.com', 'GitHub');
    expect(e.getRole()).toBe(testVal);
});

test('Get GitHub username via getGithub', () => {
    const testVal = 'GitHub';
    const e = new Engineer('example', 1, 'example@test.com', testVal);
    expect(e.getGithub()).toBe(testVal);
});