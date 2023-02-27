import { exercicio1 } from './../src/exercicio1';

describe("exercicio1", () => {
    test("deve receber um número em string e retornar o mesmo número em number", () => {
        const result = exercicio1("10")
        expect(result).toBe(10)
    })
})