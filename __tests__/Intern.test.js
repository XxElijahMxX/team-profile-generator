const Intern = require('../lib/intern');
    // creates the intern object
test('create Intern object', () => {
    const internObj ={
        name: 'test3',
        id: 109,
        email: 'test3@testintern.com',
        school: 'Butler',
    };

    expect(internObj.name).toEqual(expect.any(String));
    expect(internObj.id).toEqual(expect.any(Number));
    expect(internObj.email).toEqual(expect.any(String));
    expect(internObj.school).toEqual(expect.any(String));
});
    // gets intern name
test('get intern name', () => {
    const internObj = new Intern('test3', 109, 'test3@testintern.com', 'Butler');
    expect(internObj.getName()).toEqual(expect.any(String));
});
    // gets intern ID
test('get intern ID', () => {
    const internObj = new Intern('test3', 109, 'test3@testintern.com', 'Butler');
    expect(internObj.getId()).toEqual(expect.any(Number));
});
    // gets intern email
test('get intern email', () => {
    const internObj = new Intern('test3', 109, 'test3@testintern.com', 'Butler');
    expect(internObj.getEmail()).toEqual(expect.any(String));
});
    // gets intern school
test('get intern school', () => {
    const internObj = new Intern('test3', 109, 'test3@testintern.com', 'Butler');
    expect(internObj.getSchool()).toEqual(expect.any(String));
});
    // this assigns the intern role
test('get role for intern', () => {
    const internObj = new Intern('test3', 109, 'test3@testintern.com', 'Butler');
    expect(internObj.getRole()).toEqual('Intern');
});