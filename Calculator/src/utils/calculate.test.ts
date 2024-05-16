import {calculate} from "./calculate";

const soma = calculate("+", "10", "3");
const divide = calculate("/", "10", "2");

test("Soma", ()=>{
    expect(soma).toBeGreaterThan(11);
});

test("Divisão", ()=>{
    expect(divide).not.toBeDefined();
});