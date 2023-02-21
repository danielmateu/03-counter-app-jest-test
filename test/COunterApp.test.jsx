import { fireEvent, render, screen } from "@testing-library/react"
import { COunterApp } from "../src/COunterApp";

describe('Pruebas en <CounterApp/>', () => {

    const initialValue = 10

    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<COunterApp value={initialValue} />)
        expect(container).toMatchSnapshot()

    });

    //Debe mostrar el valor por defecto de 100
    test('Debe mostrar el valor por defecto de 100', () => {

        const { container } = render(<COunterApp value={100} />)
        expect(container).toMatchSnapshot()
        expect(screen.getByText(100)).toBeTruthy()

    })

    //Debe incrementar con el boton +1
    test('Debe incrementar con el boton +1', () => {

        render(<COunterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy()
    })

    //Debe decrementar con el boton -1
    test('Debe decrementar con el boton -1', () => {

        render(<COunterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'))
        // screen.debug()
        expect(screen.getByText(initialValue - 1)).toBeTruthy()
    })

    //Debe resetear el valor con el boton Reset
    test('Debe resetear el valor con el boton Reset', () => {

        render(<COunterApp value={initialValue} />);

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText(initialValue)).toBeTruthy()

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(initialValue)).toBeTruthy()

    })
})



