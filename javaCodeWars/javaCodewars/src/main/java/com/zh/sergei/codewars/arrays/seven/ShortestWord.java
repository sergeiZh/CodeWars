package com.zh.sergei.codewars.arrays.seven;

import java.util.Arrays;

/**
 * Kata url - https://www.codewars.com/kata/shortest-word
 * Description:
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 */
public class ShortestWord {

    public static int findShort(String s) {
        return Arrays.stream(s.split(" ")).reduce((accum, current) -> accum.length() < current.length() ? accum : current).get().length();
    }
}

/*
More sophisticated solution
public class Kata {
    public static int findShort(String s) {
        return Arrays.stream(s.split(" ")).mapToInt(String::length).min().getAsInt();
    }
}
 */
