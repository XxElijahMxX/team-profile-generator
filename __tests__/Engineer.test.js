const Engineer = require('../lib/engineer');

test('creates Engineer Object', () => {
    const engineerObj ={
        name: 'test2',
        id: 30,
        email: 'test2@testengineer.com',
    };

    expect(engineerObj.name).toEqual(expect.any(String));
    expect(engineerObj.id).toEqual(expect.any(Number));
    expect(engineerObj.email).toEqual(epect.any(String));
});

  // this gets the engineers name
  test('get engineer name', () => {
    const engineerObj = new Engineer('test2', 30,'test2@testengineer.com');
    expect(engineerObj.getName()).toEqual(expect.any(String));
});
    // this gets the engineers ID
test('get engineer ID', () => {
    const engineerObj = new Engineer('test2', 30, 'test1@testengineer.com');
    expect(engineerObj.getId()).toEqual(expect.any(Number));
});
    // this gets the engineers email 
test('get engineer email', () => {
    const engineerObj = new Engineer('test2', 30, 'test1@testengineer.com');
    expect(engineerObj.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});
    // this assigns the role for engineer
test('get role for engineer', () => {
    const engineerObj = new Engineer('test2', 30, 'test1@testengineer.com');
    expect(engineerObj.getRole()).toEqual('Engineer');
});
