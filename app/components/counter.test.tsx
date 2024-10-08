import { afterEach, expect, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./counter";
import { describe,it } from "vitest";

describe("Numeric counter for demonstration purpose",()=>{

  afterEach(()=>{
    cleanup();
  });

  it("Displays the current counter", () => {
    render(<Counter />);
    expect(screen.getByRole("heading", { level: 3, name: "0" })).toBeDefined();
  });

  it("Increments counter value on click of + button",()=>{
    render(<Counter />);
    fireEvent.click(screen.getByRole("button", {name:"+"}));
    expect(screen.getByRole("heading", { level: 3, name: "1" })).toBeDefined();
  })

  it("Decrements counter value on click of - button",()=>{
    render(<Counter />);
    fireEvent.click(screen.getByRole("button", {name:"-"}));
    expect(screen.getByRole("heading", { level: 3, name: "-1" })).toBeDefined();
  })

})

