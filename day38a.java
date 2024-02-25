class Student {
    String name;
    static String school;

    public static void changeShool() {
        school = "new school";
    }
}

public class day38a {
    public static void main(String args[]) {
        Student.school = "Woodbine School";
        Student s1 = new Student();
        s1.name = "Tony";
        System.out.println(s1.school);
    }
}
