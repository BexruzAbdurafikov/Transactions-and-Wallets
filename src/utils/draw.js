const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    updateUserData(user);
} else {
    window.location.href = "signin.html";
}

function updateUserData(user) {
    const username = document.querySelector(".user_info h1");
    const user_email = document.querySelectorAll('.email')
    if (user.name && user.surname && user.email) {
        user_email.forEach((item) => {
            item.textContent = user.email;
        });
        username.textContent = `Добро пожаловать, ${user.name} ${user.surname}`;
    }
}

const wallets = JSON.parse(localStorage.getItem("wallets")) ?? [
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
    {id: 1, type: 'Visa', currency: 'RUB'},
];

const last_transactions = JSON.parse(localStorage.getItem("last_transactions")) ?? [
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
    {id: 1232312, type: 'Visa', category: 'Автомобиль', amount: 414000000 , when: '4 дня назад'},
];

function renderWallets(arr) {
    const wallets_container = document.querySelector('.wallets');
    wallets_container.innerHTML = '';

    arr.forEach((wallet, index) => {
        const wallet_div = document.createElement('div');
        const wallet_type = document.createElement('div');
        const wallet_currency = document.createElement('div');


        wallet_div.classList.add('wallet', `wallet${index + 1}`);

        wallet_type.textContent = wallet.type;
        wallet_currency.textContent = wallet.currency;

        wallet_div.append(wallet_type, wallet_currency);
        wallets_container.append(wallet_div);
    });
}
renderWallets(wallets);

function renderLastTransactions(arr) {
    const transactions_container = document.querySelector('tbody');
    transactions_container.innerHTML = '';

    arr.forEach((transaction) => {
        const tr = document.createElement('tr');
        const transaction_id = document.createElement('td');
        const transaction_type = document.createElement('td');
        const transaction_category = document.createElement('td');
        const transaction_amount = document.createElement('td');
        const transaction_when = document.createElement('td');

        transaction_id.textContent = transaction.id;
        transaction_type.textContent = transaction.type;
        transaction_category.textContent = transaction.category;
        transaction_amount.textContent = transaction.amount;
        transaction_when.textContent = transaction.when;

        tr.append(transaction_id, transaction_type, transaction_category, transaction_amount, transaction_when);
        transactions_container.append(tr);
    });
}

renderLastTransactions(last_transactions);