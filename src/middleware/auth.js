export function checkUserAccess() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = 'signin.html';
    }
}