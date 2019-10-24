import { QuotationMarksPipe } from './quotation-marks.pipe';

describe('QuotationMarksPipe', () => {
  it('create an instance', () => {
    const pipe = new QuotationMarksPipe();
    expect(pipe).toBeTruthy();
  });

  it('replaces &quot; to "',()=>{
    const pipe = new QuotationMarksPipe();
    const transformed = pipe.transform('&quot;bla&quot;bla&quot;');
    expect(transformed).toEqual('"bla"bla"');
  })
});
