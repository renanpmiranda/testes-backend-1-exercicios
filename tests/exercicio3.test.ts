import { users } from './../src/exercicio3';

describe("exercicio3", () => {
    test("deve verificar se uma lista de usuários contém um usuário determinado", () => {
        const usersArray = users
        expect(usersArray).toContain("astrodev")
    })
})