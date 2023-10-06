package com.zh.sergei.codewars.arrays.eight;

import java.util.stream.IntStream;

/**
 * Kata url - https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/java
 * Description:
 * I'm new to coding and now I want to get the sum of two arrays...
 * Actually the sum of all their elements. I'll appreciate for your help.
 *
 * P.S. Each array includes only integer numbers. Output is a number too.
 *
 */
public class ArrayPlusArray {

    private ArrayPlusArray(){}

    public static int arrayPlusArray(int[] arr1, int[] arr2) {
        return IntStream.of(arr1).sum() + IntStream.of(arr2).sum();
    }
}
