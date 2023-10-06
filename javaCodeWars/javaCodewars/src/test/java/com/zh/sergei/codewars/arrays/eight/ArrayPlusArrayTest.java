package com.zh.sergei.codewars.arrays.eight;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
public class ArrayPlusArrayTest {

    @Test
    public void arrayPlusArray_summElementsOfTwoProvidedArrays(){
        assertThat(ArrayPlusArray.arrayPlusArray(new int[]{1,2,3}, new int[]{4,5,6})).isEqualTo(21);
        assertThat(ArrayPlusArray.arrayPlusArray(new int[]{-1,-2,-3}, new int[]{-4,-5,-6})).isEqualTo(-21);
    }
}
