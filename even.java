import java.util.*;

public class day3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
       
        int x = sc.nextInt();

        if (x % 2 == 0) { // % means it gives remainder
            System.out.println("Even");
        } else {
            System.out.println("odd");

        }
    }
}

