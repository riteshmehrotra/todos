import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest"
import ToDo from "./ToDo";

describe("Todo component for display item to work on ",()=>{
    it("shows title of the item",()=>{
        const item = {"title": "Bootcamp", "description": "It's a TDD bootcamp"};
        render(<ToDo item={item}/>)
        expect(screen.getByText("Bootcamp")).toBeDefined();
        expect(screen.getByText("It's a TDD bootcamp")).toBeDefined();
    })


})