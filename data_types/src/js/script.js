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




// ;(function(){

// 	let login = prompt('Логин', '');
// 	let answer;

// 	if (login == 'Админ') {

// 		let password  = prompt('Пароль', '');

// 		answer = check(password);

// 		function check(password) {

// 			if(password == 'Черный Властелин') {

// 				answer = 'Добро пожаловать!'
// 			}

// 			else if(password == null) {

// 				answer = 'Вход отменён'
// 			} 

// 			else {

// 				answer = 'Пароль неверен'
// 			}

// 			return answer;
// 		}
// 	}

// 	else if (login == null) {

// 		answer = 'Вход отменён';
// 	}

// 	else {

// 		answer = 'Я вас не знаю';
// 	}

// 	alert(answer);

// })();





