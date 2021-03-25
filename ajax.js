$( document ).ready(function() {
    $("#btn-submit").click(
		function(){
			if (validate())	
			{
				//sendAjaxForm('result_form', 'auth', 'action.php');                                        //вариант вызова метода отправки формы с локальным файлом action.php для проверки работы                                                                                                      
                sendAjaxForm('result_form', 'auth', 'https://digital-spectr.com/ac/academy.php');
				return false;
			}
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {        // метод отправки формы с помощью AJAX
    $.ajax({
        url:     url, 		//url страницы-обработчика
        type:     "POST", 	//метод отправки
        //dataType: "html", 	//формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	//$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phone+'<br>Email: '+result.email);      // для взаимодействия с тестовой формой result_form (отображение полученных из action.php данных)
    	},
    	error: function(response) { // Данные не отправлены
            //$('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}

function validate() {                                                           // метод валидации с помощью js
    var nameRegexp = /^[А-Яа-яЁё —]+$/;                                         // регулярное выражение для поля Имя
    var telRegexp = /^[0-9 +-]+$/;                                              // регулярное выражение для поля Телефон
    var emailRegexp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;                             // регулярное выражение для поля Электронная почта

    var vName = document.getElementById("fio")                                  // получаем элемент input для Имени по его id
    var vTel = document.getElementById("tel")                                   // получаем элемент input для Телефона по его id
    var vEmail = document.getElementById("email")                               // получаем элемент input для Электронной почты по его id

    vName.style.border = "none";                                                // убираем границу для всех input
    vTel.style.border = "none";
    vEmail.style.border = "none";

    if(!nameRegexp.test(vName.value)) {                                         // проверка входных данных (Имя) на валидность

        vName.style.border = "2px solid #ff2400";                               //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }

    if(!telRegexp.test(vTel.value)) {                                           // проверка входных данных (Телефон) на валидность
        
        vTel.style.border = "2px solid #ff2400";                                //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }

    if(vEmail.value === "")
    {
        return true;
    }

    if(!emailRegexp.test(vEmail.value)) {                                       // проверка входных данных (Электронная почта) на валидность
        
        vEmail.style.border = "2px solid #ff2400";                              //при провале валидации окрашиваем границу input в красный цвет
        return false;
    }
  
    return true;                                                                // при удачном прохождении валидации возвращаем true
}