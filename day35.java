class Pen {
    String color;
    String type; // ballpoint; gel

    public void write() {
        System.out.println("Writing something");
    }

    public void printColor() {
        System.out.println(this.color);
    }
}

class Student {
    String name;
    int age;

    public void printName() {
        System.out.println(this.name);
        System.out.println(this.age);
    }

    Student() {
        System.out.println("constructor called");
    }
}

public class day35 {
    public static void main(String args[]) {

        Student s1 = new Student();
        s1.name = "Ankush";
        s1.age = 24;

        s1.printName();

    }
}
