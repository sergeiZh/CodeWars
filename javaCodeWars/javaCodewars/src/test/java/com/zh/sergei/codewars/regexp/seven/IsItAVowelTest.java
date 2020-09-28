package com.zh.sergei.codewars.regexp.seven;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class IsItAVowelTest {

    @ParameterizedTest
    @ValueSource(strings = {"a", "E"})
    public void isVowel_shouldReturnTrue_whenInputLetterCorrect(String letter){
        assertThat(IsItAVowel.isVowel(letter)).isTrue();
    }

    @ParameterizedTest
    @ValueSource(strings = {"ou", "z", "lol"})
    public void isVowel_shouldReturnFalse_whenInputLetterIncorrect(String letter){
        assertThat(IsItAVowel.isVowel(letter)).isFalse();
    }
}

