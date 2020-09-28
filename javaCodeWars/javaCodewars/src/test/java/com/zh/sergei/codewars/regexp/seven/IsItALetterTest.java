package com.zh.sergei.codewars.regexp.seven;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class IsItALetterTest {

    @ParameterizedTest
    @ValueSource(strings = {"a", "X"})
    public void fixedTests_happyPath(String letter){
        assertThat(IsItALetter.isLetter(letter)).isTrue();
    }

    @ParameterizedTest
    @ValueSource(strings = {"", "7", "*", "ab", "a\n"})
    public void fixedTest_shouldReturnFalse_whenLetterIsNotAsExpected(String letter){
        assertThat(IsItALetter.isLetter(letter)).isFalse();
    }
}