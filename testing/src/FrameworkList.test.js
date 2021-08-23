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

    it("should render list items correctly", () => {
        const dummyData = [{
            id: 1, item: "ReactDummy"
          }, {
            id: 2, item: "AngularDummy"
          }, {
            id: 3, item: "VueDummy"
          }];
          render(<FrameworkList frameworks={dummyData} />)
          const frameworkitems = screen.getAllByRole("listitem").map((ele) => ele.textContent)
          const dummyItems = dummyData.map((ele)=>ele.item)
          expect(frameworkitems).toEqual(dummyItems)
          expect(screen.queryByText("No data !")).toBeNull();
    })
})