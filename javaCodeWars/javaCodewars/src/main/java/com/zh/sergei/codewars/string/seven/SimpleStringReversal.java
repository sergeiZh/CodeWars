package com.zh.sergei.codewars.string.seven;

import java.util.stream.IntStream;

/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
 */

public class SimpleStringReversal {

    public static String solve(String s){
        StringBuilder output = new StringBuilder(s.replaceAll(" ", "")).reverse();
        final String reversedInputWithoutBlanks = output.toString();
        IntStream.range(0, s.length())
                 .filter(indx -> s.charAt(indx) == ' ')
                 .forEach(indx -> output.insert(indx, " "));

        return output.toString();
    }

    public static void main(String[] args) {
        System.out.println(solve("skco redo cruoy"));
    }
}
