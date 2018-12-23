<?php
//array_change_key_case — Меняет регистр всех ключей в массиве
//    array_chunk — Разбивает массив на части
//    array_column — Возвращает массив из значений одного столбца входного массива
//    array_combine — Создает новый массив, используя один массив в качестве ключей, а другой для его значений
//    array_count_values — Подсчитывает количество всех значений массива
//    array_diff_assoc — Вычисляет расхождение массивов с дополнительной проверкой индекса
//    array_diff_key — Вычисляет расхождение массивов, сравнивая ключи
//    array_diff_uassoc — Вычисляет расхождение массивов с дополнительной проверкой индекса, осуществляемой при помощи callback-функции
//    array_diff_ukey — Вычисляет расхождение массивов, используя callback-функцию для сравнения ключей
//    array_diff — Вычислить расхождение массивов
//    array_fill_keys — Создает массив и заполняет его значениями с определенными ключами
//    array_fill — Заполняет массив значениями
//    array_filter — Фильтрует элементы массива с помощью callback-функции
//    array_flip — Меняет местами ключи с их значениями в массиве
//    array_intersect_assoc — Вычисляет схождение массивов с дополнительной проверкой индекса
//    array_intersect_key — Вычислить пересечение массивов, сравнивая ключи
//    array_intersect_uassoc — Вычисляет схождение массивов с дополнительной проверкой индекса, осуществляемой при помощи callback-функции
//    array_intersect_ukey — Вычисляет схождение массивов, используя callback-функцию для сравнения ключей
//    array_intersect — Вычисляет схождение массивов
//    array_key_exists — Проверяет, присутствует ли в массиве указанный ключ или индекс
//    array_key_first — Получает первый ключ массива
//    array_key_last — Получает последний ключ массива
//    array_keys — Возвращает все или некоторое подмножество ключей массива
//    array_map — Применяет callback-функцию ко всем элементам указанных массивов
//    array_merge_recursive — Рекурсивное слияние одного или более массивов
//    array_merge — Сливает один или большее количество массивов
//    array_multisort — Сортирует несколько массивов или многомерные массивы
//    array_pad — Дополнить массив определенным значением до указанной длины
//    array_pop — Извлекает последний элемент массива
//    array_product — Вычислить произведение значений массива
//*    array_push — Добавляет один или несколько элементов в конец массива
//    array_rand — Выбирает один или несколько случайных ключей из массива
//    array_reduce — Итеративно уменьшает массив к единственному значению, используя callback-функцию
//    array_replace_recursive — Рекурсивно заменяет элементы первого массива элементами переданных массивов
//    array_replace — Заменяет элементы массива элементами других переданных массивов
//    array_reverse — Возвращает массив с элементами в обратном порядке
//    array_search — Осуществляет поиск данного значения в массиве и возвращает ключ первого найденного элемента в случае удачи
//    array_shift — Извлекает первый элемент массива
//*    array_slice — Выбирает срез массива
//    array_splice — Удаляет часть массива и заменяет её чем-нибудь ещё
//    array_sum — Вычисляет сумму значений массива
//    array_udiff_assoc — Вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений callback-функцию
//    array_udiff_uassoc — Вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов callback-функцию
//    array_udiff — Вычисляет расхождение массивов, используя для сравнения callback-функцию
//    array_uintersect_assoc — Вычисляет пересечение массивов с дополнительной проверкой индексов, используя для сравнения значений callback-функцию
//    array_uintersect_uassoc — Вычисляет пересечение массивов с дополнительной проверкой индекса, используя для сравнения индексов и значений индивидуальные callback-функции
//    array_uintersect — Вычисляет пересечение массивов, используя для сравнения значений callback-функцию
//*    array_unique — Убирает повторяющиеся значения из массива
//    array_unshift — Добавляет один или несколько элементов в начало массива
//    array_values — Выбирает все значения массива
//    array_walk_recursive — Рекурсивно применяет пользовательскую функцию к каждому элементу массива
//    array_walk — Применяет заданную пользователем функцию к каждому элементу массива
//    array — Создает массив
//*    arsort — Сортирует массив в обратном порядке, сохраняя ключи
//*    asort — Сортирует массив, сохраняя ключи
//    compact — Создает массив, содержащий названия переменных и их значения
//    count — Подсчитывает количество элементов массива или что-то в объекте
//    current — Возвращает текущий элемент массива
//    each — Возвращает текущую пару ключ/значение из массива и смещает его указатель
//    end — Устанавливает внутренний указатель массива на его последний элемент
//    extract — Импортирует переменные из массива в текущую таблицу символов
//*    in_array — Проверяет, присутствует ли в массиве значение
//    key_exists — Псевдоним array_key_exists
//    key — Выбирает ключ из массива
//*    krsort — Сортирует массив по ключам в обратном порядке
//*    ksort — Сортирует массив по ключам
//    list — Присваивает переменным из списка значения подобно массиву
//    natcasesort — Сортирует массив, используя алгоритм "natural order" без учета регистра символов
//    natsort — Сортирует массив, используя алгоритм "natural order"
//    next — Перемещает указатель массива вперед на один элемент
//    pos — Псевдоним current
//    prev — Передвигает внутренний указатель массива на одну позицию назад
//    range — Создает массив, содержащий диапазон элементов
//    reset — Устанавливает внутренний указатель массива на его первый элемент
//*    rsort — Сортирует массив в обратном порядке
//    shuffle — Перемешивает массив
//    sizeof — Псевдоним count
//*    sort — Сортирует массив
//    uasort — Сортирует массив, используя пользовательскую функцию для сравнения элементов с сохранением ключей
//    uksort — Сортирует массив по ключам, используя пользовательскую функцию для сравнения ключей
//    usort — Сортирует массив по значениям используя пользовательскую функцию для сравнения элементов

//in_array — Проверяет, присутствует ли в массиве значение
//Ищет в haystack значение needle. Если strict не установлен, то при поиске будет использовано нестрогое сравнение.
$arr = [1,2,4,5,6,7,'magic','пипл', true,[2,4,'nice',[3,true]]];
//$needle = array(2,4,'nice',[3,true]);
$needle = 2;
var_dump($needle);
if (in_array($needle,$arr,true)){
        echo "Значение: $needle - присутствует в массиве";
        echo '<br>';
    }
    else
        {
        echo "Значение: $needle - отсутствует в массиве";
            echo '<br>';
    }

//array_unique — Убирает повторяющиеся значения из массива
//оставляеи первый элемент и его тип, если массив первый массив
$arr = ['a','а',[],1,1,'1','2',2,'2',4,5,6,7,'magic','magic', true,[2,2,4,'nice',[1,3,3,true]],[2,4,'nice',[3,true]]];
$arr_uniq = array_unique($arr);
echo '<pre>';
var_dump($arr_uniq);
echo '</pre>';

//array_slice — Выбирает срез массива
//array_slice() возвращает последовательность элементов массива array, определённую параметрами offset и length.
//по умолчанию array_slice() сбрасывает ключи массива.
//переопределить это поведение, установив параметр preserve_keys в TRUE. Строковые ключи сохраняются, независимо от значения этого параметра.
$arr = [5,6,7,'magic',3=>'poor','key'=>'vodka', true,[2,2,4,'nice',[1,3,3,true]]];
$arr_new = array_slice($arr,3,3,true);
echo '<pre>';
var_dump($arr_new);
echo '</pre>';

//sort — Сортирует массив
//Эта функция присваивает новые ключи элементам array. Она удалит все существующие ключи, а не просто переупорядочит их.
$arr = ['yo'=>2,4,5,6,1,2,4];
sort($arr,SORT_NUMERIC);
echo '<pre>';
var_dump($arr);
echo '</pre>';
//rsort — Сортирует массив
//Эта функция присваивает новые ключи элементам array. Она удалит все существующие ключи, а не просто переупорядочит их.
$arr = ['yo'=>2,4,5,6,1,2,4];
sort($arr,SORT_NUMERIC);
echo '<pre>';
var_dump($arr);
echo '</pre>';



//asort — Сортирует массив, сохраняя ключи
$arr = array("Name" => "Maximus", "Age" => "34", "Level" =>"100");
asort($arr);
var_dump($arr);
echo "<br />";
//arsort — Сортирует массив в обратном порядке, сохраняя ключи
arsort($arr);
var_dump($arr);
echo "<br />";
//ksort — Сортирует массив по ключам
$arr = array("Name" => "Maximus", "Age" => "34", "Level" =>"100");
ksort($arr);
var_dump($arr);
echo "<br />";
//krsort — Сортирует массив по ключам в обратном порядке
krsort($arr);
var_dump($arr);
echo "<br />";

//array_push — Добавляет один или несколько элементов в конец массива
$arr = array("Name" => "Maximus", "Age" => "34", "Level" =>"100");
array_push($arr,'Руки');
$arr['re']='11';//быстрее чем array_push
var_dump($arr);
