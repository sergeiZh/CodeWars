const {convert} = require('../../../main/number/six/BaseConversion');

test('Should be able to convert values between numerical alphabets', () => {
   expect(convert("15", '0123456789', '01')) .toEqual('1111');
   expect(convert("15", '0123456789', '01234567')) .toEqual('17');
   expect(convert("1010", '01', '0123456789')) .toEqual('10');
   expect(convert("1010", '01', '0123456789abcdef')) .toEqual('a');
});

test('Should be able to convert values between numerical and alpha-numerical alphabets', () => {
   expect(convert("0", '0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')) .toEqual('a');
   expect(convert("27", '0123456789', 'abcdefghijklmnopqrstuvwxyz')) .toEqual('bb');
   expect(convert("hello", 'abcdefghijklmnopqrstuvwxyz', '0123456789abcdef')) .toEqual('320048');
   expect(convert("SAME", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')) .toEqual('SAME');
});