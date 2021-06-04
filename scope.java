import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  	private int[] elements;
  	public int maximumDifference;

	// Add your code here
    public Difference (int [] arr ){
        this.elements = arr;
    }
    
    public void computeDifference(){
        Arrays.sort(elements);
        maximumDifference = Math.abs(elements[(elements.length-1)]-elements[0]);
    }
} // End of Difference class