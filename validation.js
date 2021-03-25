    function validate() {                                               // метод валидации с помощью js           
    var nameRegexp = /^[А-Яа-яЁё —]+$/;                                 // регулярное выражение для поля Имя
    var telRegexp = /^[0-9 +-]+$/;                                      // регулярное выражение для поля Телефон
    var emailRegexp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;                     // регулярное выражение для поля Электронная почта

    var vName = document.getElementById("fio")                          // получаем элемент input для Имени по его id
    var vTel = document.getElementById("tel")                           // получаем элемент input для Телефона по его id
    var vEmail = document.getElementById("email")                       // получаем элемент input для Электронной почты по его id

    vName.style.border = "none";                                        // убираем границу для всех input
    vTel.style.border = "none";
    vEmail.style.border = "none";

    if(!nameRegexp.test(vName.value)) {                                 // проверка входных данных (Имя) на валидность
        
        vName.style.border = "2px solid #ff2400";                       //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }

    if(!telRegexp.test(vTel.value)) {                                   // проверка входных данных (Телефон) на валидность
        
        vTel.style.border = "2px solid #ff2400";                        //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }

    if(vEmail.value === "")
    {
        return true;
    }

    if(!emailRegexp.test(vEmail.value)) {                               // проверка входных данных (Электронная почта) на валидность
        
        vEmail.style.border = "2px solid #ff2400";                      //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }
  
    return true;                                                        // при удачном прохождении валидации возвращаем true
}   



