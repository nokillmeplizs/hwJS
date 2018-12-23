(function () {
    'use strict';

    function sendForm(event) {
        event.preventDefault();

        let form_data = new FormData(this);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.action, true);
        xhr.send(form_data);

        xhr.onload = function (oEvent) {
            if (xhr.status == 200) {
                console.log("xhr response", xhr.responseText);
                responseHandler(xhr.responseText);
            }
        };
    }

    function responseHandler(response) {
        console.log(typeof(response));
        if (response == 2) {
            document.getElementById('res').innerHTML = 'пользователь с таким логином уже зарегестрирован!';
        } else if (response == 1) {
            document.getElementById('res').innerHTML = 'регистрация прошла успешно!';
                setTimeout(function () {
                    window.location.href = "authform.php";
                }, 4000);
            }
        else if (response == 0) {
          document.getElementById('res').innerHTML = 'Вы успешно авторизовались!';
          let a = document.createElement("a");
          let b = document.getElementById("page");
          b.setAttribute("style","display:block");
          a.setAttribute('href', 'logout.php');
          a.innerHTML = 'Выйти';
          document.getElementById('out').appendChild(a);
            document.getElementById('word').innerHTML = 'Вы авторизированы!';
        }
        else if (response == 3){
            document.getElementById('res').innerHTML = 'Пароль неправильный';
        }
    }

    function addFormListener() {
        for (let i = 0; i < document.forms.length; i++) {
            document.forms[i].addEventListener('submit', sendForm);
        }
    }

    addFormListener();
}());
