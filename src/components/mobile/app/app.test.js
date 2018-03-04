const expect = require('expect');

describe('test', () => {
  it('should be true', () => {
    const stateBefore = true;
    const stateAfter = true;
    expect(stateBefore).toEqual(stateAfter);
  });
});
