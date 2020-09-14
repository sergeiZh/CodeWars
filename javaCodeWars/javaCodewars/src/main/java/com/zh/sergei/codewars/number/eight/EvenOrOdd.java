package com.zh.sergei.codewars.number.eight;

/**
 * Kata link https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/java
 * Description:
 * Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */
public class EvenOrOdd {

    public static String even_or_odd(int number) {
        return number %2 == 0 ? "Even" : "Odd";
    }
}
