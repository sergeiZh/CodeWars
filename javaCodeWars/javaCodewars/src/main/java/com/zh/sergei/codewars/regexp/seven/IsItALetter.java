package com.zh.sergei.codewars.regexp.seven;

/**
 * Kata url - https://www.codewars.com/kata/regexp-basics-is-it-a-letter
 * Description:
 * Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
 */
public class IsItALetter {

    public static boolean isLetter(String s) {
        return s.matches("[a-zA-Z]");
    }
}