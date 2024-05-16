import {isDot} from "./isDot";

test("Espera true de resposta", ()=>{
    expect(isDot("a")).toBe(false);
});

test("Espera true de resposta", ()=>{
    expect(isDot("")).toBe(false);
});
