import { checkUserAccess } from "../middleware/auth.js";
import { last_transactions, wallets } from "../utils/db.js";
import { renderLastTransactions, renderWallets, updateUserInfo } from "../utils/draw.js";

checkUserAccess();

const user = JSON.parse(localStorage.getItem('user')) || {};

updateUserInfo(user);
renderWallets(wallets);
renderLastTransactions(last_transactions);