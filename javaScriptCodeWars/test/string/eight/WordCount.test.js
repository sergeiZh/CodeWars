const {countWords} = require('../../../main/string/eight/WordCount');

test('returns number of words delimited by space character(s)', ()=> {
    expect(countWords("Hello")).toEqual(1);
    expect(countWords("Hello, World!")).toEqual(2);
    expect(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toEqual(19);
    expect(countWords("")).toEqual(0);
    expect(countWords("With! Symbol@ #Around! (Every) %Word$")).toEqual(5);
    expect(countWords("Dear   Victoria, I love  to press   space button.")).toEqual(8);
});

test('returns number of words delimited by space charaters and surrounded by them', ()=> {
    expect(countWords(" Arthur ")).toEqual(1);
    expect(countWords(" David")).toEqual(1);
    expect(countWords("Nelson ")).toEqual(1);
    expect(countWords("  Hello Gomer  ")).toEqual(2);
    expect(countWords("  Hello     Bart  ")).toEqual(2);
});

test('returns number of words delimited by space charaters and surrounded by them', ()=> {
    expect(countWords("﻿Hello﻿World ")).toEqual(2);
    expect(countWords("Hello﻿World")).toEqual(2);
});