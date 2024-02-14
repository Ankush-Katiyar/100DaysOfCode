public class day27 {

    public static int placeTiles(int n, int m) {

        if (n == m) {
            return 2;
        }

        if (n < m) {
            return 1;
        }

        int vertPlacements = placeTiles(n - m, m);

        int horPlacements = placeTiles(n - 1, m);

        return vertPlacements + horPlacements;

    }

    // Place tiles of size 1xm in a floor of size nxm n=3, m=3

    public static void main(String args[]) {
        int n = 3, m = 3;
        System.out.println(placeTiles(n, m));

    }
}
