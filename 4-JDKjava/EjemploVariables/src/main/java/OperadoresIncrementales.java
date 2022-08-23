public class OperadoresIncrementales {
    public static void main(String[] args) {
        //preincremento-predecremento
            int i = 1;
            int j = --i; // i = i + 1
        System.out.println("i = " + i);
        System.out.println("j = " + j);
            
        //postincremento-postdecremento
            i = 2;
            j = i--;

        System.out.println("i = " + i);
        System.out.println("j = " + j);
    }
}
