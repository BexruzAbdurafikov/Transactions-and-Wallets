import { checkUserAccess } from "../middleware/auth.js";
import { last_transactions } from "../utils/db.js";
import { renderLastTransactions, updateUserEmail } from "../utils/draw.js";

checkUserAccess();

const user = JSON.parse(localStorage.getItem('user')) || {};
updateUserEmail(user);

renderLastTransactions(last_transactions);