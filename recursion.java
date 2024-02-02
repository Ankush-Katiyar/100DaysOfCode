public class recursion {
    public static void printNumb(int n) {
        if (n == 6) {
            return;
        }
        System.out.println(n);
        printNumb(n + 1);
    }

    public static void main(String args[]) {
        // print number from 1 to 5 using recursion
        int n = 1;
        printNumb(n);
    }
}
