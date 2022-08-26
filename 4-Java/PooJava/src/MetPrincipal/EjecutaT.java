package MetPrincipal;

import MenuP.MenuOp;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.println("Elija una opción -> ");
        int op = sc.nextInt();
        switch (op){
            case 1:
                Saludo objS = new Saludo();
                objS.saludar0();
                objS.saludar();
                break;
            case 2:
                break;
            case 3:
                System.out.println(objF.formaF());
                break;
            case 4:
                System.out.println("Aqui va la actividad del día");
                break;
            default:
        }


    }
}
