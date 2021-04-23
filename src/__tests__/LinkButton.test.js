import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {BrowserRouter} from "react-router-dom"
import LinkButton from "../components/Buttons/LinkButton";
describe('Testing LinkButton component', () =>{
    const currentPage = ["home", "/"]
    const text = "Vai pra lá"
    const route = "/register"
    const {rerender} = render(<BrowserRouter><LinkButton current="/dashboard" name={text} route={route}/></BrowserRouter>)
    it('Should className is correctly',  () => {
        for (const value of currentPage) {
            rerender(<BrowserRouter><LinkButton current={value} name={text} route={route}/></BrowserRouter>)
            const linkButton = screen.getByRole("link")
            expect(linkButton.className).toBe(value === "home" ? "link active" : "link")
        }
    })
    it('Should innerText is correctly',  () => {
        render(<BrowserRouter><LinkButton current="/dashboard" name={text} route={route}/></BrowserRouter>)
        const linkButton = screen.getByText("Vai pra lá")
        expect(linkButton).toBeInTheDocument()
    })
    it('Should route is correctly',  () => {
        render(<BrowserRouter><LinkButton current="/dashboard" name={text} route={route}/></BrowserRouter>)
        const linkButton = screen.getByRole("link")
        expect(linkButton.href).toBe("http://localhost/register")
    })
})
