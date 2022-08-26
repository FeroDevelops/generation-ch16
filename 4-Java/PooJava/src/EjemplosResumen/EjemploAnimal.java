package EjemplosResumen;

public class EjemploAnimal {
    public static void main(String[] args) {

        Animal miAnimal = new Animal("Salchicha", "Flip", 3);

        System.out.println(miAnimal.getRaza());
        System.out.println(miAnimal.getNombre());
        System.out.println(miAnimal.getEdad());

        System.out.println(miAnimal);

        Animal animalito = new Animal();
        animalito.setRaza("Salchicha");
        animalito.setNombre("Felipe");
        animalito.setEdad(4);
        System.out.println("animalito es " + animalito.getRaza());
        System.out.println("animalito es " + animalito.getNombre());
        System.out.println("animalito es " + animalito.getEdad());

    }
}
