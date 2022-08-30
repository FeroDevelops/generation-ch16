package com.frg.h_abstracta;

public class Triangulo extends FigurasGeometricas {
    private float base;
    private float altura;



    public Triangulo(float base, float altura) {

        super ("Triangulo");

        this.base = base;
        this.altura = altura;
    }

    // Se sobreescribe
    @Override
    public float area() {
        //return (base * altura)/2;
        return (getBase() * getAltura())/2;
    }
    public float getBase() {
        return base;
    }
    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }
    public void setAltura(float altura) {
        this.altura = altura;
    }

}