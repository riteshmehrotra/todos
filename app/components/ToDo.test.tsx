import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest"
import ToDo from "./ToDo";

describe("Todo component for display item to work on ",()=>{
    it("shows title of the item",()=>{
        render(<ToDo/>)
        expect(screen.getByText("Bootcamp")).toBeDefined();
    })
})