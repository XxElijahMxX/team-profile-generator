const Manager = require('../lib/manager');
    // creates the manager object
test('create Manager object', () => {
    const managerObj ={
        name: 'test4',
        id: 7,
        email: 'test4@testmanager.com',
        officeNumber: 01,
    };

    expect(managerObj.name).toEqual(expect.any(String));
    expect(managerObj.id).toEqual(expect.any(Number));
    expect(managerObj.email).toEqual(expect.any(String));
    expect(managerObj.officeNumber).toEqual(expect.any(Number));
});
    // gets manager name
test('get manager name', () => {
    const managerObj = new Manager('test4', 7, 'test4@testmanager.com', 01);
    expect(managerObj.getName()).toEqual(expect.any(String));
});
    // gets manager ID
test('get manager ID', () => {
    const managerObj = new Manager('test4', 7, 'test4@testmanager.com', 01);
    expect(managerObj.getId()).toEqual(expect.any(Number));
});
    // gets manager email
test('get manager email', () => {
    const managerObj = new Manager('test4', 7, 'test4@testmanager.com', 01);
    expect(managerObj.getEmail()).toEqual(expect.any(String));
});
    // gets manager office number
test('get manager office number', () => {
    const managerObj = new Manager('test4', 7, 'test4@testmanager.com', 01);
    expect(managerObj.getOfficeNumber()).toEqual(expect.any(Number));
});
    // this assigns the manager role
test('get role for manager', () => {
    const managerObj = new Manager('test4', 7, 'test4@testmanager.com', 01);
    expect(managerObj.getRole()).toEqual('Manager');
});