package com.zh.sergei.codewars.number.eight;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

public class BasicMathematicalOperationsTest {

    @Test
    public void basicMath_shouldAddParameterForPlusSign(){
        assertThat(BasicMathematicalOperations.basicMath("+", 4, 7)).isEqualTo(11);
    }

    @Test
    public void basicMath_shouldSubtractParameterForMinusSign(){
        assertThat(BasicMathematicalOperations.basicMath("-", 15, 18)).isEqualTo(-3);
    }

    @Test
    public void basicMath_shouldMultiplyParameterForStarSign(){
        assertThat(BasicMathematicalOperations.basicMath("*", 5, 5)).isEqualTo(25);
    }

    @Test
    public void basicMath_shouldDivideParameterForSlashSign(){
        assertThat(BasicMathematicalOperations.basicMath("/", 49, 7)).isEqualTo(7);
    }
}
