package com.zh.sergei.codewars.arrays.seven;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class CountOfMostFrequentArrayElementsTest {


    @Test
    void mostFrequentItemCount_returnCountOfMostFrequentItems() {
        assertThat(CountOfMostFrequentArrayElements.mostFrequentItemCount(new int[] {3, -1, -1})).isEqualTo(2);
        assertThat(CountOfMostFrequentArrayElements.mostFrequentItemCount(new int[] {3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3})).isEqualTo(5);
    }

}
