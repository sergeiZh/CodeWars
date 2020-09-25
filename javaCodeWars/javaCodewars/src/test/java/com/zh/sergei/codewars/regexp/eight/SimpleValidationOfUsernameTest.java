package com.zh.sergei.codewars.regexp.eight;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class SimpleValidationOfUsernameTest {

    @ParameterizedTest
    @ValueSource(strings = {"____", "p1pp1", "asd43_34"})
    public void validateUsr_shouldReturnTrue_whenOnlyLatinLowercaseLetterNumbersUnderscoreAndLenghtFrom4To16Passed(String inputValue){
        assertThat(SimpleValidationOfUsername.validateUsr(inputValue)).isTrue();
    }

    @ParameterizedTest
    @ValueSource(strings = {"a", "Hass", "Hasd_12assssssasasasasasaasasasasas", "", "012", "asd43 34"})
    public void validateUsr_shouldReturnFalse_whenOnlyLatinLowercaseLetterNumbersUnderscoreAndLenghtFrom4To16Passed(String inputValue){
        assertThat(SimpleValidationOfUsername.validateUsr(inputValue)).isFalse();
    }
}
