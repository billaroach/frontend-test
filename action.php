<?php

if (isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'phone' => $_POST["phone"],
        'email' => $_POST["email"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>