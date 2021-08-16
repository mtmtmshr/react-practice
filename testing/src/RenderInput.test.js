import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import useEvent from "@testing-library/user-event"
import RenderInput from "./RenderInput"

afterEach(() => cleanup());

describe("Rendering", () => {
    it("Should render all the elements correctly", ()=>{
        render(<RenderInput />);
        expect(screen.getByRole("button")).toBeTruthy();
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
    })
})

describe("Input form onChange event", () => {
    it("should update input value correctly", () => {
        render(<RenderInput />)
        const inputValue = screen.getByPlaceholderText("Enter");
        useEvent.type(inputValue, "test")
        expect(inputValue.value).toBe("test")
    });
});

describe("Console Button conditionally triggerd", () => {
    it("Should not trigger output function", () => {
        const outputConsole = jest.fn()
        render(<RenderInput outputConsole={outputConsole} />)
        useEvent.click(screen.getByRole("button"))
        expect(outputConsole).not.toHaveBeenCalled()
    })
    it("Should trigger output function", () => {
        const outputConsole = jest.fn()
        render(<RenderInput outputConsole={outputConsole} />)
        const inputValue = screen.getByPlaceholderText("Enter");
        useEvent.type(inputValue, "test")
        useEvent.click(screen.getByRole("button"))
        expect(outputConsole).toHaveBeenCalledTimes(1)
    })
})