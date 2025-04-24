package com.zh.sergei.codewars.arrays.eight;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class HowGoodAreYouReallyTest {

    @Test
    void betterThanAverageTest_returnTrue_whenEtalonScoreIsGreaterThenAverage() {
        assertThat(HowGoodAreYouReally.betterThanAverage(new int[] {2, 3}, 5)).isTrue();
        assertThat(HowGoodAreYouReally.betterThanAverage(new int[] {100, 40, 34, 57, 29, 72, 57, 88}, 75)).isTrue();
        assertThat(HowGoodAreYouReally.betterThanAverage(new int[] {12, 23, 34, 45, 56, 67, 78, 89, 90}, 69)).isTrue();
    }

    @Test
    void betterThanAverageTest_returnFalse_whenEtalonScoreIsLessThenAverage() {
        assertThat(HowGoodAreYouReally.betterThanAverage(new int[] {100, 90}, 11)).isFalse();
        assertThat(HowGoodAreYouReally.betterThanAverage(new int[] {50, 50, 50}, 50)).isFalse();
    }

}
