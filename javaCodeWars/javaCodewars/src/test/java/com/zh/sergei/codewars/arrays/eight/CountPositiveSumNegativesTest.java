package com.zh.sergei.codewars.arrays.eight;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class CountPositiveSumNegativesTest {

    @Test
    public void countPositivesSumNegatives_returnArrayOfTwoElements() {

        int[] actualOutput1 = CountPositiveSumNegatives.countPositivesSumNegatives(
                new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15});
        int[] actualOutput2 = CountPositiveSumNegatives.countPositivesSumNegatives(
                new int[] {0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14});

        assertThat(actualOutput1).isEqualTo(new int[]{10, -65});
        assertThat(actualOutput2).isEqualTo(new int[]{8, -50});
    }

    @Test
    public void countPositivesSumNegatives_returnEmptyArray_whenNullOrEmptyArrayProvided() {

        assertThat(CountPositiveSumNegatives.countPositivesSumNegatives(null)).isEqualTo(new int[]{});
        assertThat(CountPositiveSumNegatives.countPositivesSumNegatives(new int[]{})).isEqualTo(new int[]{});
    }
}
