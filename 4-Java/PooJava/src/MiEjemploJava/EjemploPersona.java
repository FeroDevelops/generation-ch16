package MiEjemploJava;

public class EjemploPersona {

    public static void main(String[] args) {
        Persona p = new Persona("Juan", 23, 2357);
        p.setNombre("Diego");
        p.setEdad(10);
        p.setNss(12345);
        System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());

    }

}
