package com.zh.sergei.codewars.string.seven;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class DisemvowelTrolls {

    public static String disemvowel(String str) {
        return Arrays.stream(str.split(""))
                     .filter(letter -> !List.of("a", "e", "i", "o", "u").contains(letter.toLowerCase()))
                     .collect(Collectors.joining(""));
    }

    // possible solution
//    public static String disemvowel(String Z) {
//        return Z.replaceAll("(?i)[aeiou]" , "");
//    }
}
