package com.zh.sergei.codewars.arrays.seven;

import java.util.Arrays;

/**
 * Kata url https://www.codewars.com/kata/square-every-digit
 * Description:
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 *
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 *
 * Note: The function accepts an integer and returns an integer
 */
public class SquareEveryDigit {

    public static int squareDigits(int n) {
        return Integer.parseInt(Arrays.stream(String.valueOf(n).split(""))
                                      .map(stringValue -> Integer.parseInt(stringValue) * Integer.parseInt(stringValue))
                                      .map(String::valueOf)
                                      .reduce((accumValue, currValue) -> accumValue + currValue).get());
    }
}
