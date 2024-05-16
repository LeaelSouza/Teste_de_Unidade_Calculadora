import {isNumber} from "./isNumber";

test("Espera que o retorno seja verdadeiro", ()=>{
    expect(isNumber("42")).toBe(true);
});

test("Espera que o retorno seja falso", ()=>{
    expect(isNumber("abc")).toBe(false);
});
