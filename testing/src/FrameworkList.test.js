import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import useEvent from "@testing-library/user-event"
import FrameworkList from "./FrameworkList"

afterEach(() => cleanup);

describe("Rendering the list with props", () => {
    it("should render No Data ! when no data propped.", () => {
        render(<FrameworkList />)
        expect(screen.getByText("No data !")).toBeInTheDocument();
    })
})