import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Goku'
    const subtitle = 'Soy un subtítulo'

    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render(<FirstApp title={title} />)
        // console.log(container);
        expect(container).toMatchSnapshot()
    })

    //Debe mostrar el mensaje "Hola, soy Goku
    test('Debe mostrar el mensaje "Hola, soy Goku"', () => {

        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy()
    })

    //Debe de mostrar el título en un h1
    test('Debe de mostrar el título en un h1', () => {

        render(<FirstApp title={title} />)
        const h1 = screen.getByTestId('test-title')
        expect(h1.tagName).toBe('H1')
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title)
    })

    //Debe de mostrar el subtítulo que pase por props
    test('Debe de mostrar el subtítulo que pase por props', () => {
        
        render(<FirstApp title={title} subtitle={subtitle} />)
        expect(screen.getAllByText(subtitle).length).toBe(2)
    })
})