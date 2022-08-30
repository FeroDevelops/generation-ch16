package com.frg.herencia;

public class BasePadre {
    protected int a;
    private double b;
    private String c;

    public BasePadre() {

    }
    public void visualizarA(){
        System.out.println("object h -> soy un método de la clase BasePadre");
    }
    public void visualizarABC(){
        System.out.println("object ho -> soy el método visualizarABC");

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}



