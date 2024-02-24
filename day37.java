abstract class Animal {

    abstract void walk();
}

class Horse extends Animal {
    public void walk() {
        System.out.println("walks on 4 legs");
    }
}

class Chicken extends Animal {
    public void walk() {
        System.out.println("Walks on 2 legs");
    }
}

public class day37 {
    public static void main(String args[]) {
        Horse horse = new Horse();
        horse.walk();

    }
}
