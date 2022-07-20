package com.zh.sergei.codewars.arrays.eight;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class PrintingArrayElementsWithCommaDelimitersTest {


    @Test
    public void printArray_shouldConcatenateArrayElementWithCommaAsSeparator(){
        assertThat(PrintingArrayElementsWithCommaDelimiters.printArray(new String[]{"h", "e", "l", "l", "o"})).isEqualTo("h,e,l,l,o");
        assertThat(PrintingArrayElementsWithCommaDelimiters.printArray(new Integer[]{3, 4, 1, 2})).isEqualTo("3,4,1,2");
    }

    @Test
    public void printArrayReactive_shouldConcatenateArrayElementWithCommaAsSeparator(){
        assertThat(PrintingArrayElementsWithCommaDelimiters.printArrayReactive(new String[]{"h", "e", "l", "l", "o"})).isEqualTo("h,e,l,l,o");
        assertThat(PrintingArrayElementsWithCommaDelimiters.printArrayReactive(new Integer[]{3, 4, 1, 2})).isEqualTo("3,4,1,2");
    }
}
