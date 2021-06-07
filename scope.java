// Day 14 - Scope


import java.util.*;


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