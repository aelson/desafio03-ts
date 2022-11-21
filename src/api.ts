const conta = {
    email: 'aelson@test',
    password: '123456',
    name: 'Aelson Alves',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
