import { ReversePipe } from "./reverse.pipe";

describe('Reverse Pipe', () => {
  it('should reverse the input string', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
