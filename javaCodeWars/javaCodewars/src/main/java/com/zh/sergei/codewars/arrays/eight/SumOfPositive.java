package com.zh.sergei.codewars.arrays.eight;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
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

    public static int sum(int[] arr) {
        return IntStream.of(arr)
                        .filter(value -> value > 0)
                        .sum();
    }


    public static int sumReactive(int[] arr) {
        List<Integer> output = new ArrayList<>();
        Integer[] integers = Arrays.stream(arr)
                                   .boxed()
                                   .collect(Collectors.toList())
                                   .toArray(new Integer[]{});
        Flux.fromArray(integers)
            .filter(inte -> inte > 0)
            .reduce(0, Integer::sum)
            .subscribe(output::add);

        return output.get(0);
    }
}
