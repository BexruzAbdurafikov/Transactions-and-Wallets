import { drawDeafultLayout } from "../layouts/default.js";
import { checkUserAccess } from "../middleware/auth.js";
import { Modal } from "../utils/classes.js";
import { last_transactions } from "../utils/db.js";
import { renderLastTransactions, updateUserInfo } from "../utils/draw.js";
import { getUser } from "../utils/helpers.js";

const user = getUser();

drawDeafultLayout();
updateUserInfo(user);
checkUserAccess();
renderLastTransactions(last_transactions);

const ModalWindow = document.querySelector('.modal');
const addWallet = new Modal(ModalWindow)
const addWalletBtn = document.querySelector('.add-transaction');
const closeBtn = document.querySelector('.close');
const transactionForm = document.forms.transaction_form;

addWalletBtn.addEventListener(`click`, () => {
    addWallet.open();
});

closeBtn.addEventListener(`click`, () => {
    addWallet.close();
});

transactionForm.onsubmit = (e) => {
    e.preventDefault();
    const fm = new FormData(transactionForm);
    const transaction = {}
    fm.forEach((value, key) => {
        transaction[key] = value;
    }); 
    last_transactions.push(transaction);
    renderLastTransactions(last_transactions);
    localStorage.setItem('last_transaction', JSON.stringify(last_transactions));
    addWallet.close();
    transactionForm.reset();
}