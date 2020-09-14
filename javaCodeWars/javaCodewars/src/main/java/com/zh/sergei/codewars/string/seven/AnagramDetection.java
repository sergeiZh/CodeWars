package com.zh.sergei.codewars.string.seven;

/*
Kata url https://www.codewars.com/kata/529eef7a9194e0cbc1000255/java
Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


 */

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class AnagramDetection {

    public static boolean isAnagram(String test, String original) {
        final List<String> originalLIst = Arrays.asList(original.toLowerCase().split(""));
        Collections.sort(originalLIst);
        final String sortedOriginal = originalLIst.stream().collect(Collectors.joining(""));
        final List<String> testLIst = Arrays.asList(test.toLowerCase().split(""));
        Collections.sort(testLIst);
        final String sortedTest = testLIst.stream().collect(Collectors.joining(""));
        return sortedOriginal.equals(sortedTest);
    }
}
