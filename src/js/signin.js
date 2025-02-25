const signin = document.forms.signin;
const users = JSON.parse(localStorage.getItem('users')) ?? [];

signin.onsubmit = (e) => {
    e.preventDefault();

    const fm = new FormData(signin);
    const email = fm.get('email');
    const password = fm.get('password');

    const user = users.find((item) => item.email === email);

    if (!user) {
        alert('Пользователь не найден!');
        return;
    }

    if (user.password !== password) {
        alert('Неверный пароль!');
        return;
    }

    if (user && user.password === password) {
        window.location.href = 'mainPage.html'
    }
    localStorage.setItem('user', JSON.stringify(user));
    
    signin.reset();
    updateUserData(user)
};


