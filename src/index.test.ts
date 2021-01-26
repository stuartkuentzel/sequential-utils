import { unpackageMidi } from './';

describe('parse patch name from midi data', () => {
  // eslint-disable-next-line prettier/prettier
  const data = [240,1,40,96,0,36,25,0,16,73,6,0,3,36,19,5,0,32,80,6,2,0,0,0,1,1,127,60,20,0,48,39,4,124,1,0,112,0,28,0,0,120,127,33,64,0,0,64,1,0,80,124,0,1,0,0,0,0,0,0,113,72,0,0,0,36,3,7,0,2,127,0,0,0,0,0,0,0,127,0,0,0,0,0,41,0,63,0,124,1,96,15,40,0,127,0,120,3,64,31,10,0,126,0,112,7,0,0,0,0,0,0,24,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,38,26,104,10,14,47,75,114,16,8,8,4,2,1,64,32,16,0,8,4,2,0,64,0,16,247]
  const uint8Array = new Uint8Array(data.length);
  uint8Array.set(data, 0);

  it('should contain the patch name', () => {
    const unpackaged = unpackageMidi(uint8Array);
    expect(String.fromCharCode(...unpackaged)).toContain('RL Shaker');
  });
});
