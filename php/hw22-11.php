<?php
//Task 2 . Дан массив [3, 1, 6, 0, 4, 5].
//С помощью цикла foreach найдите сумму квадратов элементов этого массива.
$arr = [3, 1, 6, 0, 4, 5];
foreach ($arr as $item){
    $summ += $item**2;
}
echo "сумма квадратов элементов массива равна ".$summ.'<br>';


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

//
//Task4. Создать массив из дней недели. С помощью цикла foreach выведите все дни недели, а текущий день выведите жирным.
//Текущий день можно получить с помощью функции date.
//Название дней выводить по-русски

$arr =['Monday' => "понедельник",'Tuesday' => "вторник", 'Wednesday' => "среда", 'Thursday' => "четверг", 'Friday' => "пятница", 'Saturday' => "суббота", 'Sunday' => "воскресенье"];
$thisday = date("l");
foreach($arr as $key => $day){
    if ($key === $thisday) {
        echo '<b>'.$day.'</b>';
        echo '<br>';
    }
    else {
        echo $day;
        echo '<br>';
    }
}

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

// Task 6. мин мах
function findMax($arr){
    $a = $arr[0];
    foreach ($arr as $item){
        if ($item > $a){
            $a = $item;

        }

    }
    echo $a;
}

function findMin($arr){
    $a = $arr[0];
    foreach ($arr as $item){
        if ($item < $a){
            $a = $item;

        }

    }
    echo $a;
}
$bb = [1,14,5,6,2,4,11];
findMax($bb);
findMin($bb);