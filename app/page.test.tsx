import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import { describe, it } from "vitest";

describe("Home page", () => {

  it("App Router: Works with Server Components", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: "XPerience - ToDo Kata" }),
    ).toBeDefined();
  });
})

