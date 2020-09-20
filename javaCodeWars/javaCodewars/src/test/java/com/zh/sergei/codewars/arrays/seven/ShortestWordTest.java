package com.zh.sergei.codewars.arrays.seven;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;


public class ShortestWordTest {

    @ParameterizedTest
    @ValueSource(strings = {"bitcoin take over the world maybe who knows perhaps", "turns out random test cases are easier than writing out basic ones"})
    public void findShort_shouldReturnShortesWord(String input){
        assertThat(ShortestWord.findShort(input)).isEqualTo(3);
    }

}
