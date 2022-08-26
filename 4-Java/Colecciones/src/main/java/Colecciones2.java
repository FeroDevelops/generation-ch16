import java.util.HashSet;
import java.util.Set;


public class Colecciones2 {
    public static void main(String[] args) {
        //Set
        //HashSet

        //no guarda los valores en el orden en el que se van agregando
        //SET no permiten elementos duplicados
        //La coleccion que funciona mas rapido



        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        boolean persona = miSet.remove("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));
    }
}
