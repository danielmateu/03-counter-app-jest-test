import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp />', () => {
    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola, soy Goku'
        const {container} = render(<FirstApp title={title}/>)

        // console.log(container);
        expect(container).toMatchSnapshot()
        

    })

    //Debe mostrar el título en un h1
    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola, soy Goku'
        const {container, getByText} = render(<FirstApp title={title}/>)

        const h1 = container.querySelector('h1')
        expect(getByText(title)).toBeTruthy()
        // expect(h1.textContent).toBe(title)
        expect(h1.textContent).toContain(title)

    })
})