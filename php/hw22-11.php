<?php
//Task 2 . Дан массив [3, 1, 6, 0, 4, 5].
//С помощью цикла foreach найдите сумму квадратов элементов этого массива.
$arr = [3, 1, 6, 0, 4, 5];
foreach ($arr as $item){
    $summ += $item**2;
}
echo "сумма квадратов элементов массива равна ".$summ;

//Task 3. Нарисуйте треугольник (или ромб) из символов *.
//Высота треугольника равна 15.
$a='*';
$i=1;
while ($i<16){
    for($j=0;$j<$i;$j++){
        echo $a;
    }
    echo '<br>';
    $i++;
}

//Task4. Создать массив из дней недели. С помощью цикла foreach выведите все дни недели, а текущий день выведите жирным.
//Текущий день можно получить с помощью функции date.
//Название дней выводить по-русски
$arr =["Понедельник","вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
$thisday = date("l");
if ($thisday == Monday){
    $arr[0] = 'MONDAY';
}
if ($thisday == Tuesday){
    $arr[1] = 'TUESDAY';
}
if ($thisday == Wednesday){
    $arr[2] = 'WEDNESDAY';
}
if ($thisday == Thursday){
    $arr[3] = 'THURSDAY';
}
if ($thisday == Friday){
    $arr[4] = 'FRIDAY';
}
if ($thisday == Saturday){
    $arr[5] = 'SATURDAY';
}
if ($thisday == Sunday){
    $arr[6] = 'SUNDAY';
}

foreach($arr as $day){
    echo $day;
    echo '<br>';
}
$arr=[];
//Task 5. Отсортировать массив по 'price'
$arr = [
    '1'=> [
        'price' => 10,
        'count' => 2
    ],
    '2'=> [
        'price' => 5,
        'count' => 5
    ],
    '3'=> [
        'price' => 8,
        'count' => 5
    ],
    '4'=> [
        'price' => 12,
        'count' => 4
    ],
    '5'=> [
        'price' => 8,
        'count' => 4
    ],
];
array_multisort($arr);
echo '<pre>';
var_dump($arr);
echo '</pre>';