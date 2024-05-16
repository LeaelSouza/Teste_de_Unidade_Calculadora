import { allClear } from "../operations";

test("AllClear tem que ser nulo", ()=>{
    expect(allClear()).toBe(0);
});

test("AllClear nao pode que ser nulo", ()=>{
    expect(allClear()).toBeNull();
});
