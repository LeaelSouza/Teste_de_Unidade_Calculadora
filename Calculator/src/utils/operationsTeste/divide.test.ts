import { divide } from "../operations";

test("Divisão", ()=>{
    expect(divide(10,2)).toBe(5);
});

test("Divisão", ()=>{
    expect(divide(10,2)).not.toBe(5);
});
