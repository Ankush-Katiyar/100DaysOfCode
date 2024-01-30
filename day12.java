public class day12 {
    public static void main(String args[]) {
        StringBuilder sb = new StringBuilder("Tony");
        System.out.println(sb);

        sb.insert(2, 'n');
        System.out.println(sb);

        // delete the extra
        sb.delete(2, 4);
        System.out.println(sb);

    }
}
