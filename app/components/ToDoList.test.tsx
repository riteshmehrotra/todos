import { render,screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ToDoList from "./ToDoList"


describe("To Do List", ()=>{
    it("should contain a list of ToDo items", ()=>{
        render(<ToDoList/>)
        //Expectation: Multiple cards with title and description
        expect(screen.getAllByTitle("toDoCard").length).toBe(2);
        expect(screen.getByText("TDD")).toBeDefined();
    })
})