;(function(){

    var login = prompt('Логин ?', '');
    if (login == 'Админ'){

        var password = prompt('Пароль ?', '');
        message = CheckPassword(password);

        function CheckPassword(password){
            var message;
            
            if (password == 'Чёрный властелин'){
                message = 'Добро пожаловать!'
            }
            else if (password == null){
                message = 'Вход отменен.'
            }
            else {
                message = 'Пароль неверный!!!'
            }
            return message;
        }
    }
    else if (login == null){
        message = 'Вход отменен.'
    }
    else {
        message = 'Я вас не знаю!!!'
    }
    alert (message);

    
}) ();





