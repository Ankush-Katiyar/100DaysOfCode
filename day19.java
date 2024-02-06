public class day19 {

    //Print x^n (stack height = logn)

    public static int calcPower(int x, int n) {
        if (n == 0) {
            return 1;
        }
        if (x == 0) {
            return 0;
        }

        // if n is even
        if (n % 2 == 0) {
            return calcPower(x, n / 2) * calcPower(x, n / 2);
        } else {
            return calcPower(x, n / 2) * calcPower(x, n / 2) * x;
        }
    }

    public static void main(String args[]) {
        int x = 2, n = 5;
        int ans = calcPower(x, n);
        System.out.println(ans);

    }
}
