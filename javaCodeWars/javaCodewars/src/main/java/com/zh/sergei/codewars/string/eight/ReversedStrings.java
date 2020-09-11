package com.zh.sergei.codewars.string.eight;

/**
 * Source of Kata https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/java
 * description
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world'  =>  'dlrow'
 */
public class ReversedStrings {

        public static String solution(String str) {
            return new StringBuilder(str).reverse().toString();
        }

    public static void main(String[] args) {
        System.out.println(solution("world"));
    }


}
