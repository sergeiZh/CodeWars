package com.zh.sergei.codewars.arrays.eight;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

public class SumOfPositiveTest {

    @Test
    public void sum_shouldSummAllPositiveNumbersOfProvidedArray(){
        assertThat(SumOfPositive.sum(new int[]{1,2,3,4,5})).isEqualTo(15);
        assertThat(SumOfPositive.sum(new int[]{1,-2,3,4,5})).isEqualTo(13);
        assertThat(SumOfPositive.sum(new int[]{})).isEqualTo(0);
        assertThat(SumOfPositive.sum(new int[]{-1,-2,-3,-4,-5})).isEqualTo(0);
        assertThat(SumOfPositive.sum(new int[]{-1,2,3,4,-5})).isEqualTo(9);
    }

    @Test
    public void sumReactive_shouldSummAllPositiveNumbersOfProvidedArray(){
        assertThat(SumOfPositive.sumReactive(new int[]{1,2,3,4,5})).isEqualTo(15);
        assertThat(SumOfPositive.sumReactive(new int[]{1,-2,3,4,5})).isEqualTo(13);
        assertThat(SumOfPositive.sumReactive(new int[]{})).isEqualTo(0);
        assertThat(SumOfPositive.sumReactive(new int[]{-1,-2,-3,-4,-5})).isEqualTo(0);
        assertThat(SumOfPositive.sumReactive(new int[]{-1,2,3,4,-5})).isEqualTo(9);
    }
}
