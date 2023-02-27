import { exercicio2 } from './../src/exercicio2';

describe("exercicio2", () => {
    test("deve receber uma data no formato 'aaaa/mm/dd' e retornar outra string no formato 'dd/mm/aaaa'", () => {
        const result = exercicio2("2022/09/26")
        expect(result).toBe("26/09/2022")
    })
})