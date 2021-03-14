package com.zh.sergei.codewars.string.seven;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.parallel.Execution;
import static org.assertj.core.api.Assertions.assertThat;

public class DisemvowelTrollsTest {

    //Consonants is a non-vowel. A, E, I, U, O, sometimes Y

    @Test
    public void disemvowel_shouldReturnProvidedWordWithoutConsonants(){
        assertThat(DisemvowelTrolls.disemvowel("This website is for losers LOL!"))
                .isEqualTo("Ths wbst s fr lsrs LL!");
        assertThat(DisemvowelTrolls.disemvowel("No offense but,\\nYour writing is among the worst I've ever read"))
                .isEqualTo("N ffns bt,\\nYr wrtng s mng th wrst 'v vr rd");
        assertThat(DisemvowelTrolls.disemvowel("What are you, a communist?"))
                .isEqualTo("Wht r y,  cmmnst?");
    }
}
