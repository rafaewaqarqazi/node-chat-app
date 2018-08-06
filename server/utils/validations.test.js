const expect = require('expect');
const {isRealString} = require('./validations');

describe('isRealString',()=>{
    it('Should reject non-string values',()=>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('Should reject with only spaces',()=>{
        var res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('Should allow string with space characters',()=>{
        var res = isRealString('   ahsldk lkajsdl ');
        expect(res).toBe(true);
    });
});