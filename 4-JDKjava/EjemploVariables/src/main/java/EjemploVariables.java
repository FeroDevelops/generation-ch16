public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Fero";
        String saludo = " Hola esto es ejemplo de variable";

        System.out.println(saludo + " "+ nombre);
        char espacio = '\u0040';
        char caracter = 'F';
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char tamaño maximo: " + Character.MAX_VALUE);
        System.out.println("char tamaño minimo: " + Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int tamaño maximo: " + Integer.MAX_VALUE);
        System.out.println("int tamaño minimo: " + Integer.MIN_VALUE);
        
        float numeroFloat = 0.00000000015f; //1.5e-10f
        System.out.println("numeroFloat = " + numeroFloat);

        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float tamaño maximo: " + Float.MAX_VALUE);
        System.out.println("float tamaño minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567e-39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double tamaño maximo: " + Double.MAX_VALUE);
        System.out.println("double tamaño minimo: " + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);


        short valorShort = 1;
        System.out.println("valorShort = " + valorShort);
        System.out.println("short corresponde en byte: " + Short.BYTES);
        System.out.println("short corresponde en bits: " + Short.SIZE);
        System.out.println("short tamaño maximo: " + Short.MAX_VALUE);
        System.out.println("short tamaño minimo: " + Short.MIN_VALUE);


        //long valorLong = 0;
        //System.out.println("valorLong = " + valorLong);
        //System.out.println("long corresponde en byte: " + Long.BYTES);
        //System.out.println("long corresponde en bits: " + Long.SIZE);
        //System.out.println("long tamaño maximo: " + Long.MAX_VALUE);
        //System.out.println("long tamaño minimo: " + Long.MIN_VALUE);

        //var miVar = '12';
        //System.out.println("miVar = " + miVar);


    }
}