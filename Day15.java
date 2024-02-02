public class Day15 {
    public static void printNumb(int n) {
        if (n == 0) {
            return;
        }
        System.out.println(n);
        printNumb(n - 1);
    }

    public static void main(String args[]) {
        // print number from 5 to 1 using recursion
        int n = 5;
        printNumb(n);
    }
}
