import { multiply } from "../operations";

test("Multiplicação", ()=>{
    expect(multiply(2,2)).toBe(4);
});

test("Multiplicação", ()=>{
    expect(multiply(2,2)).not.toBe(4);
});
