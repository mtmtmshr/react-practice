import React from "react"
import { ReactNodeArray, render, screen } from "@testing-library/react"
import Render from "./Render"

describe("Rendering", ()=>
{
    it("Should render all the elementh correctly", ()=>
    {
        render(<Render />)
        //screen.debug()
        
        //screen.debug(screen.getByRole("heading"))
        expect(screen.getByRole("heading")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();

        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getAllByRole("button")[1]).toBeTruthy();
        
        expect(screen.getByText("RTL")).toBeTruthy();
        expect(screen.queryByText("DJFOI")).toBeNull();
        expect(screen.getByTestId("copyright")).toBeTruthy();
        // expect(screen.getByText("RTL")).toBeTruthy();
    }
    )
})