import { describe, it, expect } from "vitest";
import reducer from "../src/state/reducer.js";

describe("todo reducer", () => {
  it("ADD should prepend new todo and ignore empty", () => {
    const state = [];
    const s1 = reducer(state, { type: "ADD", payload: "First" });
    expect(s1.length).toBe(1);
    expect(s1[0].text).toBe("First");
    const s2 = reducer(s1, { type: "ADD", payload: "  " });
    expect(s2.length).toBe(1);
  });

  it("ADD should block case-insensitive duplicates", () => {
    const s1 = reducer([], { type: "ADD", payload: "Buy Milk" });
    const s2 = reducer(s1, { type: "ADD", payload: "buy milk" });
    expect(s2.length).toBe(1);
  });

  it("EDIT should update text and reject duplicates/empty", () => {
    const a = reducer([], { type: "ADD", payload: "Alpha" });
    const b = reducer(a, { type: "ADD", payload: "Beta" });
    const idAlpha = b.find((t) => t.text === "Alpha").id;

    // empty ignored
    const b1 = reducer(b, {
      type: "EDIT",
      payload: { id: idAlpha, text: "   " },
    });
    expect(b1).toEqual(b);

    // duplicate ignored
    const b2 = reducer(b, {
      type: "EDIT",
      payload: { id: idAlpha, text: "beta" },
    });
    expect(b2).toEqual(b);

    // proper change
    const b3 = reducer(b, {
      type: "EDIT",
      payload: { id: idAlpha, text: "Gamma" },
    });
    expect(b3.find((t) => t.id === idAlpha).text).toBe("Gamma");
  });

  it("CLEAR_COMPLETED should remove only done todos", () => {
    let s = [];
    s = reducer(s, { type: "ADD", payload: "One" });
    s = reducer(s, { type: "ADD", payload: "Two" });
    const idOne = s.find((t) => t.text === "One").id;
    s = reducer(s, { type: "TOGGLE", payload: idOne });

    const cleared = reducer(s, { type: "CLEAR_COMPLETED" });
    expect(cleared.find((t) => t.text === "One")).toBeUndefined();
    expect(cleared.find((t) => t.text === "Two")).toBeDefined();
  });
});
