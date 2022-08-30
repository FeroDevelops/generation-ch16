package MiFecha;

public class Fecha {

    private int dia;
    private int mes;
    private int anio;

    public Fecha(){

    }

    public int getDia() {

    }

    public int getMes() {

    }

    public int getAnio() {

    }




    public void setAnio(int anio){
        this.anio = anio;
    }

    public String formaF(){
        return ""+getDia()+"/"+getMes()+"/";getAnio();
    }



}
