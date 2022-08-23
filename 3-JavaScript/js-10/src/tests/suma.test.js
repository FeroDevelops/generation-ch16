const suma = require( '../js/suma')

//pedir un valor esperado
//una vez teniendo el valor comparar el resultado con el valor esperado

test ('sumar 1 + 2 debe ser 3', () => {
    expect(suma(1,2)).toBe(3);
});

test('1 + 4 no debe ser 0', () => {
    expect(suma(1,4)).not.toBe(0);
})