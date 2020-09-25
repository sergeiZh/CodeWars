const {validateUsr} = require('../../../main/regexp/eight/SimpleValidationOfUsername');

describe('', () => {
    test('', () => {
       expect(validateUsr('asddsa')).toBeTruthy();
       expect(validateUsr('____')).toBeTruthy();
       expect(validateUsr('asd43_34')).toBeTruthy();
       expect(validateUsr('p1pp1')).toBeTruthy();
    });
    test('', () => {
        expect(validateUsr('a')).toBeFalsy();
        expect(validateUsr('Hass')).toBeFalsy();
        expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toBeFalsy();
        expect(validateUsr('')).toBeFalsy();
        expect(validateUsr('012')).toBeFalsy();
        expect(validateUsr('asd43 34')).toBeFalsy();
    });
});