import { sum } from "../operations";

test.only("Soma dois valores", ()=>{
    expect(sum(4,4)).toBe(8);
});

test.only("Soma dois valores", ()=>{
    expect(sum(4,4)).not.toBe(7);
});
