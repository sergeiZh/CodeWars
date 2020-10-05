package com.zh.sergei.codewars.number.eight;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

public class OppositeNumberTest {

    @Test
    public void opposite_shouldReturnProvidedNumberWithNegativeSign_whenParameterIsPositive(){
        assertThat(OppositeNumber.opposite(1)).isEqualTo(-1);
    }

    @Test
    public void opposite_shouldReturnPositiveNumber_whenParameterNumberIsNegative(){
        assertThat(OppositeNumber.opposite(-1)).isEqualTo(1);
    }

    @Test
    public void opposite_shouldReturnZero_whenParameterIsZero(){
        assertThat(OppositeNumber.opposite(0)).isEqualTo(0);
    }
}
