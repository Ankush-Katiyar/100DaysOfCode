import java.util.ArrayList;
import java.util.Collections;

class day39 {
    // collection framework
    // array list : banti h heap list ke andar
    public static void main(String args[]) {
        ArrayList<Integer> list = new ArrayList<Integer>();

        // add elements
        list.add(0);
        list.add(2);
        list.add(3);

        System.out.println(list);

        // get elements
        int element = list.get(0);
        System.out.println(element);

        // to add elements in between

        list.add(1, 1);
        System.out.println(list);

        // set element : to change elements
        list.set(0, 5);
        System.out.println(list);

        // delete elements
        list.remove(3);
        System.out.println(list);

        // for size of array list
        int size = list.size();
        System.out.println(size);

        // loops
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i));
        }
        System.out.println();

        // sorting
        Collections.sort(list);
        System.out.println(list);

    }

}
