const Intern = require('../lib/intern')

test('can set school to Intern object', ()=> {
  const school = 'School of Rock';
  expect(Intern.school).toBe('School of Rock');
})