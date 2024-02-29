import java.util.*;

class day42 {
    public static void main(String args[]) {
        LinkedList<String> list = new LinkedList<String>();

        list.addFirst("a");
        list.addFirst("is");
        System.out.println(list);

        list.addFirst("this");
        list.addLast("list");
        System.out.println(list);

        System.out.println(list.size());

        for (int i = 0; i < list.size(); i++) {

            System.out.print(list.get(i) + "->");
        }
        System.out.println("null");

        // delete first
        list.remove(3);
        System.out.println(list);

    }
}
