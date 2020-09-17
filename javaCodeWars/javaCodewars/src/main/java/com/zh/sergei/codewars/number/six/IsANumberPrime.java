package com.zh.sergei.codewars.number.six;

import java.util.OptionalInt;
import java.util.stream.IntStream;

/**
 * Kata url https://www.codewars.com/kata/is-a-number-prime/
 * Description:
 * Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
 *
 * Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * Requirements
 *
 *     You can assume you will be given an integer input.
 *     You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
 *     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on
 *     language version). Looping all the way up to n, or n/2, will be too slow.
 */
public class IsANumberPrime {

    public static boolean isPrime(int num) {
        if(num == 2 || num == 3 || num == 5){
            return true;
        }

        if(num < 2 || num % 2 == 0 || num % 3 == 0 || num % 5 == 0){
            return false;
        }

        final int sqrtNum = (int)Math.floor(Math.sqrt(num));
        final OptionalInt dilimeter = IntStream.range(2, sqrtNum + 1).filter(dilim -> num % dilim == 0).findFirst();

        return !dilimeter.isPresent();
    }
}
