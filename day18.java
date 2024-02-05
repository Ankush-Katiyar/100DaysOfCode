public class day18 {
    // Print fibonacci series till nth term
    public static void printfib(int a, int b, int n) { // a=2nd last term, b = last term
        if(n == 0){
            return;
        }
        int c = a + b;
        System.out.println(c);
        printfib(b, c, n-1);

    } 

    public static void main(String args[]) {
        int a = 0, b = 1;
        System.out.println(a);
        System.out.println(b);
        int n = 7;
        printfib(a, b, n-2);

    }

}
