import { getSaludo } from "../src/base-pruebas/02-template-string";



describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar Hola Dani', () => {
        const nombre = 'Dani!';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    })
    // test('getSaludo debe de retornar Hola Dani! si no hay argumento nombre', () => {
    //     const saludo = getSaludo();
    //     expect(saludo).toBe('Hola Dani');
    // })
})