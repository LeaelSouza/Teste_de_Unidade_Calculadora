import {removeZeroLeft} from "./removeZeroLeft";

test("Espera que remova os zeros da direita", ()=>{
    expect(removeZeroLeft("000123")).toBe(123);
});

test("Espera 0", ()=>{
    expect(removeZeroLeft("0")).toBe(0);
});
