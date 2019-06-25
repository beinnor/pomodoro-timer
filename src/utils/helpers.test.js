import { toMMSS, toMM } from './helpers';

it('Adds leading zero to mm:ss if mm < 10', () => {
  expect(toMMSS(300)).toEqual('05:00');
});

it('Will display 60:00 at 3600 seconds', () => {
  expect(toMMSS(3600)).toEqual('60:00');
});

it('Expect 0 to equal 0', () => {
  expect(toMM(0)).toEqual('0');
});

it('Expect 60 to equal 60', () => {
  expect(toMM(3600)).toEqual('60');
});
