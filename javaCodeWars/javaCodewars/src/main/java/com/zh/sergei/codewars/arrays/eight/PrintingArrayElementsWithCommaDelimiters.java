package com.zh.sergei.codewars.arrays.eight;

import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * Kata url - https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 * Description:
 * Input: Array of elements
 *
 * ["h","o","l","a"]
 *
 * Output: String with comma delimited elements of the array in th same order.
 *
 * "h,o,l,a"
 *
 */

public class PrintingArrayElementsWithCommaDelimiters {

    public static String printArray(Object [] array) {
        return Arrays.stream(array).map(value -> String.valueOf(value)).collect(Collectors.joining(","));
    }
}
