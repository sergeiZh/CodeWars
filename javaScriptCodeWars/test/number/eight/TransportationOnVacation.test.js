const {rentalCarCost} = require('../../../main/number/eight/TransportationOnVacation');

describe('Function should calculate price for renting car on vacations', () => {

    test('Rent days under 3 should just be multiplied on 40', () => {
       expect(rentalCarCost(1)).toEqual(40);
       expect(rentalCarCost(2)).toEqual(80);
    });

    test('Rent days under 7 should be multiplied on 40 with 20 of discount', () => {
        expect(rentalCarCost(3)).toEqual(100);
        expect(rentalCarCost(4)).toEqual(140);
        expect(rentalCarCost(5)).toEqual(180);
        expect(rentalCarCost(6)).toEqual(220);
    });

    test('Rent days over 7 should be multiplied on 40 with 50 of discount', () => {
        expect(rentalCarCost(7)).toEqual(230);
        expect(rentalCarCost(8)).toEqual(270);
        expect(rentalCarCost(9)).toEqual(310);
        expect(rentalCarCost(10)).toEqual(350);
    });
});