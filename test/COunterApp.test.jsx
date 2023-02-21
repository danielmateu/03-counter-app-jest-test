import { render, screen } from "@testing-library/react"
import { COunterApp } from "../src/COunterApp";


describe('Pruebas en <CounterApp/>', () => {
    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {

        const initialValue = 10
        const { container } = render(<COunterApp value={initialValue} />)
        expect(container).toMatchSnapshot()

    });

    //Debe mostrar el valor por defecto de 100
    test('Debe mostrar el valor por defecto de 100', () => {

        const { container } = render(<COunterApp value={100} />)
        expect(container).toMatchSnapshot()
        expect(screen.getByText(100)).toBeTruthy()

    })
})



