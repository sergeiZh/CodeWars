package com.zh.sergei.codewars.number.eight;

/**
 * Kata url - https://www.codewars.com/kata/transportation-on-vacation
 *
 * Description:
 * After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend
 * and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively,
 * if you rent the car for 3 or more days, you get $20
 * off your total.
 *
 * Write a code that gives out the total amount for different days(d).
 */
public class TransportationOnVacation {

    public static final int EVERY_DAY_RENT_PRICE = 40;
    public static final int THREE_DAYS_DISCOUNT = 20;
    public static final int SEVEN_DAYS_DISCOUNT = 50;

    public static int rentalCarCost(int days) {
        return days < 3 ? days * EVERY_DAY_RENT_PRICE : days < 7 ? days * EVERY_DAY_RENT_PRICE - THREE_DAYS_DISCOUNT : days * EVERY_DAY_RENT_PRICE - SEVEN_DAYS_DISCOUNT;
    }
}
