package com.zh.sergei.codewars.string.six;

import java.util.ArrayList;
import java.util.List;

/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

 */
public class LongestAlphabeticalString {

    public static String longestAlpabeticalSubstring(String text) {
        List<StringBuilder> alphabetSequences = new ArrayList<>();
        StringBuilder storage = new StringBuilder();
        for(int i=0; i<text.length(); i++){
            if(storage.length() == 0){
                alphabetSequences.add(storage);
                storage.append(text.charAt(i));
                continue;
            }
            if(text.codePointAt(i) < storage.codePointAt(storage.length()-1)) {
                storage = new StringBuilder();
                alphabetSequences.add(storage);
                storage.append(text.charAt(i));
                continue;
            }

            storage.append(text.charAt(i));
        }

        return alphabetSequences.stream().reduce(new StringBuilder(""), (accum, currValue) -> {
            if(currValue.length() > accum.length()) {
                return currValue;
            }

            return accum;
        }).toString();
    }

    /*
    very good solution
      static String longestAlpabeticalSubstring(String text) {
    int start = 0, offset = 0;
    for (int i = 1, j = 0; i < text.length(); i++) {
      if (text.charAt(i - 1) > text.charAt(i)) {
        j = i;
      }
      else if (i - j > offset - start) {
        start = j;
        offset = i;
      }
    }
    return text.substring(start, offset + 1);
  }
     */



    public static void main(String[] args) {
        System.out.println(longestAlpabeticalSubstring("abcdeapbcdef"));
    }
}
