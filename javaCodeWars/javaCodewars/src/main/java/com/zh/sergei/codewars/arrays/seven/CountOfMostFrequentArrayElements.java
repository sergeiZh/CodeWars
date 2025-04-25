package com.zh.sergei.codewars.arrays.seven;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

public class CountOfMostFrequentArrayElements {

    private CountOfMostFrequentArrayElements() {}

    public static int mostFrequentItemCount(int[] collection) {
        if(collection == null || collection.length == 0) {
            return 0;
        }

        Arrays.sort(collection);
        Map<Integer, Integer> numbersMap = new HashMap<>();
        IntStream.of(collection).forEach(element -> numbersMap.put(element, numbersMap.getOrDefault(element, 0) + 1));
        return numbersMap.entrySet()
                .stream()
                .max(Map.Entry.comparingByValue())
                .orElse(Map.of(Integer.MIN_VALUE, Integer.MIN_VALUE).entrySet().stream().findFirst().get())
                .getValue();

    }

}
