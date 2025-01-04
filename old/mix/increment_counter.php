<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

    // Читаем текущее значение счетчика из файла
    $counter = (int) file_get_contents("download_count.txt");
    
    // Увеличиваем счетчик на 1
    $counter++;
    
    // Сохраняем новое значение счетчика в файл
    file_put_contents("/var/www/mix.flectone.net/download_count.txt", $counter);
    
    // Возвращаем новое значение счетчика в качестве ответа на запрос
    echo $counter;
?>
