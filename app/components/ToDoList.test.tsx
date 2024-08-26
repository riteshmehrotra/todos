import { render,screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import ToDoList from "./ToDoList"
import { json } from "stream/consumers"


describe("To Do List", ()=>{
    it("should contain a list of ToDo items", ()=>{

        global.fetch = vi.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve([ { "title": "BDD", "description": "Blah" },
                { "title": "TDD2", "description": "Blah2" }
            ]),
            }),
          )
        render(<ToDoList/>)
        waitFor(()=>{
        expect(screen.getAllByTitle("toDoCard").length).toBe(2);

            expect(screen.getByText("BDD")).toBeDefined();

        })
    })
})