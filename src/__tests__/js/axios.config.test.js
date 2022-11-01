import { dinoApi, ajaxFinally } from '../../js/axios.config';

describe('axios.config.js tests', () => {
  // EXAMPLE: Mocking process.env variables
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });
  test('Real dino url is sent if mock not true', () => {
    process.env.REACT_APP_USE_MOCKS = 'false';
    expect(dinoApi.url()).toEqual(expect.stringContaining('http://'));
  });
  test('Fixture dino url is sent if mock is true', () => {
    process.env.REACT_APP_USE_MOCKS = 'true';
    expect(dinoApi.url()).toEqual(expect.stringContaining('__fixtures__'));
  });
  test('ajaxFinally calls function if mock is true', (done) => {
    const testDoneFunc = () => done();
    process.env.REACT_APP_USE_MOCKS = 'true';
    ajaxFinally(testDoneFunc, 10);
  });
  test('ajaxFinally calls function of mock is false', (done) => {
    const testDoneFunc = () => done();
    process.env.REACT_APP_USE_MOCKS = 'false';
    ajaxFinally(testDoneFunc, 10);
  });
});
