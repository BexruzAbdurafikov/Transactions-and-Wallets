const signup = document.forms.signup;
const users = JSON.parse(localStorage.getItem('users')) ?? [];

signup.onsubmit = (e) => {
    e.preventDefault();
    
    const user = {};
    const fm = new FormData(signup);
    fm.forEach((value, key) => {
        user[key] = value;
    });

    const isExist = users.find((item) => item.email === user.email);
    
    if (isExist) {
        alert('Пользователь с таким email уже существует');
        return;
    }
    window.location.href = 'signin.html';
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Вы успешно зарегистрировались!');
    signup.reset();
};
