package com.zh.sergei.codewars.number.eight;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

public class TransportationOnVacationTest {

    @Test
    public void rentalCarCost_shouldReturnMultiplicationOfNumberOfDaysWith40_whenAmountOfDaysLessThan3() {
        assertThat(TransportationOnVacation.rentalCarCost(1)).isEqualTo(40);
        assertThat(TransportationOnVacation.rentalCarCost(2)).isEqualTo(80);
    }

    @Test
    public void rentalCarCost_shouldReturnMultiplicationOfNumberOfDaysWith40Minus20_whenAmountOfDaysLessThan7() {
        assertThat(TransportationOnVacation.rentalCarCost(3)).isEqualTo(100);
        assertThat(TransportationOnVacation.rentalCarCost(4)).isEqualTo(140);
        assertThat(TransportationOnVacation.rentalCarCost(5)).isEqualTo(180);
        assertThat(TransportationOnVacation.rentalCarCost(6)).isEqualTo(220);
    }

    @Test
    public void rentalCarCost_shouldReturnMultiplicationOfNumberOfDaysWith40Minus50_whenAmountOfDaysLessThan7() {
        assertThat(TransportationOnVacation.rentalCarCost(7)).isEqualTo(230);
        assertThat(TransportationOnVacation.rentalCarCost(8)).isEqualTo(270);
        assertThat(TransportationOnVacation.rentalCarCost(9)).isEqualTo(310);
        assertThat(TransportationOnVacation.rentalCarCost(10)).isEqualTo(350);
    }
}
