const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    it('Can instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('Can set name via constructor arguments', () => {
        const name = 'Haifa';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Can set ID via constructor argument', () => {
        const testVal = 10;
        const e = new Employee('example', testVal);
        expect(e.id).toBe(testVal);
    });

    it('Can set email via constructor argument', () => {
        const testVal = 'example@test.com';
        const e = new Employee('example', 1, testVal);
        expect(e.email).toBe(testVal);
    });

    describe('getName', () => {
        it('Can get name via getName()', () => {
            const testVal = 'Haifa';
            const e = new Employee(testVal);
            expect(e.getName()).toBe(testVal);
        });
    });

    describe('getEmail', () => {
        it('Can get name via getEmail()', () => {
            const testVal = 'example@test.com';
            const e = new Employee('example', 1, testVal);
            expect(e.getEmail()).toBe(testVal);
        });
    });

    describe('getRole', () => {
        it('getRole() returns \'Employee\'', () => {
            const testVal = 'Employee';
            const e = new Employee('Haifa', 1, 'example@test.com');
            expect(e.getRole()).toBe(testVal);
        });
    });
});

// ES6 coversion 
// import employee from './lib/Employee.js';