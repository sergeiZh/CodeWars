package com.zh.sergei.codewars.regexp.eight;

import java.util.regex.Pattern;

/**
 * Kata url - https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
 *
 * Description:
 * Write a simple regex to validate a username. Allowed characters are:
 *
 *     lowercase letters,
 *     numbers,
 *     underscore
 *
 * Length should be between 4 and 16 characters (both included).
 */
public class SimpleValidationOfUsername {

    public static boolean validateUsr(String s) {
        return s.matches("[a-z0-9_]{4,16}");
    }
}
