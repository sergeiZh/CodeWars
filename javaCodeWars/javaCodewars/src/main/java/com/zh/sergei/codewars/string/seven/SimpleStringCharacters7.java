package com.zh.sergei.codewars.string.seven;

import java.util.Arrays;

public class SimpleStringCharacters7 {

    public static class Kata {
        public static int[] Solve(String word) {
            int[] outputArr = {0, 0, 0, 0};
            Arrays.asList(word.split("")).forEach(element -> {
                if(element.matches("[A-Z]")){
                    outputArr[0]++;
                } else if(element.matches("[a-z]")) {
                    outputArr[1]++;
                } else if (element.matches("[0-9]")){
                    outputArr[2]++;
                } else if (element.matches("[^a-zA-Z0-9]")) {
                    outputArr[3]++;
                }
            });
            System.out.println(String.format("%s %s %s %s", outputArr[0], outputArr[1], outputArr[2], outputArr[3]));
            return outputArr;
        }
    }
}
