package com.zh.sergei.codewars.arrays.eight;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
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

    public static String printArray(Object[] array) {
        return Arrays.stream(array)
                     .map(String::valueOf)
                     .collect(Collectors.joining(","));
    }

    public static String printArrayReactive(Object[] array) {
        List<String> result = new ArrayList<>();
        Flux.just(array)
            .map(String::valueOf)
            .collect(Collectors.joining(","))
            .subscribe(result::add);

        return result.get(0);
    }
}
