package com.zh.sergei.codewars.string.seven;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/*
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars
initials('Barack Hussain obama') => returns B.H.Obama

Complete the function initials.

 */

public class CWars {

    public static String initials(String name) {
        final List<String> normalizedName = Arrays.asList(name.toLowerCase().split(" "));
        return IntStream.range(0, normalizedName.size())
                        .mapToObj(index -> {
                            if (index == normalizedName.size() - 1) {
                                final String lastWord = normalizedName.get(index);
                                return Character.toUpperCase(lastWord.charAt(0)) + lastWord.substring(1);
                            }

                            return String.format("%s.", Character.toUpperCase(normalizedName.get(index).charAt(0)));
                        })
                        .collect(Collectors.joining());
    }

    /*
    static String initials(String name) {
    return stream(name.split(" ")).map(s -> s.substring(0, 1).toUpperCase()).collect(joining("."))
        + name.substring(name.lastIndexOf(' ') + 2);
  }
     */

    public static void main(String[] args) {
        System.out.println(initials("barrack hussain Obama"));
    }
}
