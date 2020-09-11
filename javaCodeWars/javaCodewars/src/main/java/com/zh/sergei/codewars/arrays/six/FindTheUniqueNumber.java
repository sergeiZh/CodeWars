package com.zh.sergei.codewars.arrays.six;

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

Kata.findUniq(new double[]{ 1, 1, 1, 2, 1, 1 }); // => 2
Kata.findUniq(new double[]{ 0, 0, 0.55, 0, 0 }); // => 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */
public class FindTheUniqueNumber {

    public static double findUniq(double arr[]) {
        double output = 0;
        if(arr[0] == arr[1]){
            for(int i=1; i<arr.length-1; i++){
                if(arr[i] != arr[i+1]){
                    output = arr[i+1];
                    break;
                }
            }
        } else {
            output = arr[0] == arr[2] ? arr[1] : arr[0];
        }
        return output;
    }

    public static void main(String[] args) {
        System.out.println(findUniq(new double[]{0, 1, 0}));
    }
}
