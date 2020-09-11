package com.zh.sergei.codewars.string.seven;

import java.util.stream.IntStream;

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
 */
public class AlternateCapitalization {

    public static String[] capitalize(String s){
        StringBuilder evenCapitalized = new StringBuilder();
        StringBuilder oddCapitalized = new StringBuilder();
        IntStream.range(0, s.length())
                 .forEach(digit -> {
                     if(digit%2 == 0){
                         evenCapitalized.append(Character.toUpperCase(s.charAt(digit)));
                         oddCapitalized.append(s.charAt(digit));
                     } else {
                         oddCapitalized.append(Character.toUpperCase(s.charAt(digit)));
                         evenCapitalized.append(s.charAt(digit));
                     }
                 });
        return new String[]{evenCapitalized.toString(), oddCapitalized.toString()};
    }

    public static void main(String[] args) {
        System.out.println(capitalize("abcdef")[0]);
        System.out.println(capitalize("abcdef")[1]);
    }
}
