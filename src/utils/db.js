export const wallets = JSON.parse(localStorage.getItem("wallets")) ?? [
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
];

export const last_transactions = JSON.parse(localStorage.getItem("last_transactions")) ?? [
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
];