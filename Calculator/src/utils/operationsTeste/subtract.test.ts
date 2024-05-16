import { subtract } from "../operations";

test("Subtrai um valor", ()=>{
    expect(subtract(2,2)).toBe(0);
});

test("Subtrai um valor", ()=>{
    expect(subtract(2,2)).not.toBe(0);
});
