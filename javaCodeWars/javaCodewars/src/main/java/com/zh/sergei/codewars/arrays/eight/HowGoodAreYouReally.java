package com.zh.sergei.codewars.arrays.eight;


import java.util.stream.IntStream;

/*
 * Kata url - https://www.codewars.com/kata/5601409514fc93442500010b/train/java
 *
 * There was a test in your class and you passed it. Congratulations!
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return true if you're better, else false!
 *
 * Note:
 * Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
 *
 */
public class HowGoodAreYouReally {

    private HowGoodAreYouReally() {}

    public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
        int average = (IntStream.of(classPoints).sum() + yourPoints) / (classPoints.length + 1);
        return yourPoints > average;
    }

}
