const Manager = require('../lib/manager')

test('can set office number to Manager object', ()=> {
  const officeNumber = 1;
  expect(Manager.officeNumber).to.equal(1);
})