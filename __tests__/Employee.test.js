const Employee = require('../lib/employee');

test('creates employee object', () => {
    const employeeObj ={
        name:'test1',
        id:23,
        email: 'test1@testemployee.com',
    };

    expect(employeeObj.name).toEqual(expect.any(String));
    expect(employeeObj.id).toEqual(expect.any(Number));
    expect(employeeObj.email).toEqual(expect.any(String));
});
    // this gets the employees name
test('get employee name', () => {
    const employeeObj = new Employee('test1', 23,'test1@testemployee.com');
    expect(employeeObj.getName()).toEqual(expect.any(String));
});
    // this gets the employees ID
test('get employee ID', () => {
    const employeeObj = new Employee('test1', 23, 'test1@testemployee.com');
    expect(employeeObj.getId()).toEqual(expect.any(Number));
});
    // this gets the employees email 
test('get employee email', () => {
    const employeeObj = new Employee('test1', 23, 'test1@testemployee.com');
    expect(employeeObj.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get role for employee', () => {
    const employeeObj = new Employee('test1', 23, 'test1@testemployee.com');
    expect(employeeObj.getRole()).toEqual('Employee');
});

