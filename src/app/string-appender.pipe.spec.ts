import { StringAppenderPipe } from './string-appender.pipe';

describe('StringAppenderPipe', () => {
  it('create an instance', () => {
    const pipe = new StringAppenderPipe();
    expect(pipe).toBeTruthy();
  });
});
