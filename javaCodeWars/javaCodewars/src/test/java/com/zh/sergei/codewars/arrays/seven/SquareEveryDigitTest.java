package com.zh.sergei.codewars.arrays.seven;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

public class SquareEveryDigitTest {

    @Test
    public void squareDigits_shouldReturnIntegerWhereEachDigitOfInputNumberIsMultipliedByItself(){
        final int result = SquareEveryDigit.squareDigits(9911);
        assertThat(result).isEqualTo(818111);
    }
}
