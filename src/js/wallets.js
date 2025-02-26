import { checkUserAccess } from "../middleware/auth.js";
import { wallets } from "../utils/db.js";
import { renderWallets, updateUserEmail, updateUserInfo } from "../utils/draw.js";

checkUserAccess();

const user = JSON.parse(localStorage.getItem('user')) || {};
updateUserEmail(user);

renderWallets(wallets);