import java.util.*;

public class day5 {
    public static void main(String args[]) {

        // while(condtion):
        // int i = 0;
        // while (i < 11) {
        // System.out.println(i);
        // i = i + 1;
        // }

        // int i = 12;
        // while (i < 11) {
        // System.out.println("Ankush Katiyar");
        // }
        
        // do while :
        // do {
        // System.out.println("Ankush");
        // } while (i < 11);

        // Print sum of first natural number :
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0;

        for (int i = 0; i <= n; i++) {
            sum = sum + i;
        }

        System.out.println(sum);

    }
}
