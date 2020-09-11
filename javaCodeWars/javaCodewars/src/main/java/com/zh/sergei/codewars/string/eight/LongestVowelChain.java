package com.zh.sergei.codewars.string.eight;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2.
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
 */
public class LongestVowelChain {

    public static int solve(String s){
        int highestChainLength = 0;
        final Matcher matcher = Pattern.compile("[uoeaio]+").matcher(s);
        while(matcher.find()){
            int currentChainLength = matcher.group().length();
            if(currentChainLength > highestChainLength){
                highestChainLength = currentChainLength;
            }
        }
        return highestChainLength;
        /*
        best solution
        of(s.split("[^aeiou]")).mapToInt(String::length).max().orElse(0);
         */
    }

    public static void main(String[] args) {
        System.out.println(solve("suoidea"));
    }
}
