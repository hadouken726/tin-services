import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import PrimaryButton from "../components/Buttons/PrimaryButton";
describe('Testing PrimaryButton component', () => {
    const children = "Click me"
    let called = false
    const action = () => called = true
    it('Should innerText is correctly', () => {
        render(<PrimaryButton action={action}>{children}</PrimaryButton>)
        const primaryButton = screen.getByText("Click me")
        expect(primaryButton).toBeInTheDocument()
    })
    it('Should action is triggered', () => {
        render(<PrimaryButton action={action}>{children}</PrimaryButton>)
        const linkButton = screen.getByRole("button")
        fireEvent.click(linkButton)
        expect(called).toBe(true)
    })
})