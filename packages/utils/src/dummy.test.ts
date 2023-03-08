import { dummy } from './dummy';

describe('dummy', () => {
  it('should return the correct value', () => {
    expect(dummy()).toEqual(1);
  });
});