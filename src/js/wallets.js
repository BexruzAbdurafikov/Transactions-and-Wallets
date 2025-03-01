import { drawDeafultLayout } from "../layouts/default.js";
import { checkUserAccess } from "../middleware/auth.js";
import { Modal } from "../utils/classes.js";
import { wallets } from "../utils/db.js";
import { renderWallets, updateUserInfo } from "../utils/draw.js";
import { getUser } from "../utils/helpers.js";

const user = getUser();

drawDeafultLayout();
updateUserInfo(user);
checkUserAccess();
renderWallets(wallets);

const ModalWindow = document.querySelector('.modal');
const addWallet = new Modal(ModalWindow)
const addWalletBtn = document.querySelector('.add-wallet');
const closeBtn = document.querySelector('.close');
const walletForm = document.forms.wallet_form;

addWalletBtn.addEventListener(`click`, () => {
    addWallet.open();
});

closeBtn.addEventListener(`click`, () => {
    addWallet.close();
});

walletForm.onsubmit = (e) => {
    e.preventDefault();
    const fm = new FormData(walletForm);
    const wallet = {}
    fm.forEach((value, key) => {
        wallet[key] = value;
    }); 
    wallets.push(wallet);
    renderWallets(wallets);
    addWallet.close();
    walletForm.reset();
}