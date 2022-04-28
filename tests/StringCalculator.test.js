import { StringCalculator } from "../js/StringCalculator";

let strCalc;

beforeAll(() =>{
    strCalc = new StringCalculator()
})

test('aucun nombre', () => {
    expect(strCalc.add("")).toBe(0)
})

test('addition basic', () => {
    expect(strCalc.add("1")).toBe(1)
    expect(strCalc.add("1,2")).toBe(3)

    expect(strCalc.add("1,2,5,10,20,50")).toBe(88)
})

test('addition \\n', () => {
    expect(strCalc.add("1,2\n5\n10,20,50")).toBe(88)
})

test('addition delimter', () => {
    expect(strCalc.add("//;\n1;2")).toBe(3)
})

test('nombre négatife', () => {
    expect(strCalc.add("1,2,-3")).toBe("Negatives not allowed. -3")

    expect(strCalc.add("//;\n1;-2")).toBe("Negatives not allowed. -2")

    expect(strCalc.add("1,2,-3,-4,-5")).toBe("Negatives not allowed. -3 -4 -5")
})

test('nombre > 1000', () => {
    expect(strCalc.add("//;\n1;1250")).toBe(1)

    expect(strCalc.add("12,15,2,2015")).toBe(29)
})

test('delimiter complexe', () => {
    expect(strCalc.add("//***\n1***12***20")).toBe(33)
})

test('delimiter multiple', () => {
    expect(strCalc.add("//[**][%%]\n1**2%%3")).toBe(6)
})