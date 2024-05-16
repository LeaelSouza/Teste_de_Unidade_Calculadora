import { equal } from "../operations";

test("Verifica igualdade", ()=>{
    expect(equal(2,2)).toBe(2);
});

test("Verifica igualdade", ()=>{
    expect(equal(2,2)).not.toBe(3);
});
