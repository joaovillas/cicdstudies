import { genMD5, genSHA256 } from './';

describe('Must generate hash every entrance', () => {
  it('should return MD5 from value', () => {
    const mock = {
      text: 'test',
      resp: '098f6bcd4621d373cade4e832627b4f6'
    }

    expect(genMD5(mock.text)).toEqual(mock.resp);
  });

  it('should return SHA256 from value', () => {
    const mock = {
      text: 'test',
      resp: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
    }

    expect(genSHA256(mock.text)).toEqual(mock.resp);
  });
});