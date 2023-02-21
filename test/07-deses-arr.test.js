import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {
    test('retornaArreglo debe de retornar un string y un número', () => {
        //Inicialización
        const [letras, numeros] = retornaArreglo()
        //Estimulo
        //Observar el comportamiento
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })

})