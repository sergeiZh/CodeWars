package com.zh.sergei.codewars.arrays.eight;

import java.util.stream.IntStream;

/**
 * Kata url - https://www.codewars.com/kata/sum-of-positive
 * Description:
 * You get an array of numbers, return the sum of all of the positives ones.
 *
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 *
 * Note: if there is nothing to sum, the sum is default to 0.
 */
public class SumOfPositive {

    public static int sum(int[] arr){
        return IntStream.of(arr).filter(value -> value > 0).sum();
    }

}
