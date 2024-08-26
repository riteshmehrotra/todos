import { beforeAll, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import { describe, it } from "vitest";

describe("Home page", () => {

  beforeAll(()=>{
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([ { "title": "BDD", "description": "Blah" },
          { "title": "TDD2", "description": "Blah2" }
      ]),
      }),
    )
  })

  it("App Router: Works with Server Components", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: "XPerience - ToDo Kata" }),
    ).toBeDefined();
  });
})

