import mokilow from '../index.js'

test('throw when data is not passed in', () => {
  expect(() => {
    mokilow.warn();
  }).toThrow('no log data provided');

  expect(() => {
    mokilow.error();
  }).toThrow('no log data provided');

  expect(() => {
    mokilow.debug();
  }).toThrow('no log data provided');

  expect(() => {
    mokilow.info();
  }).toThrow('no log data provided');
})