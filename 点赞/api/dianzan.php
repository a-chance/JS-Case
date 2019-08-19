<?php

    // 接受数据 修改本地文件
    // isset() 是否设置了， 返回值 ，防止PHP页面接受不到数据而报错

    $id = isset($_POST['id']) ? $_POST['id'] : '';
    // 1.找到文件路径
    $path = 'weibo.json';

    // 2.打开文件(以只读的方式打开)
    $file = fopen($path, 'r');


    // 3.读取文件：把json数据读取到PHP页面中
    // 读取出来的数据是字符串格式
    $con = fread($file, filesize($path));

    // 4.把字符串转成对象[{}, {}, {}]
    $arr = json_decode($con, true);
    
    // 5.匹配id修改good(在PHP修改)
    for($i = 0; $i < count($arr); $i++){
        if($id == $arr[$i]['id']){
            $arr[$i]['good']++;
            echo $arr[$i]['good'];
        }
    }
    
    // 6.修改json的数据
    $file = fopen($path, 'w'); //修改文件读取模式：w覆盖的模式写入
    $data = json_encode($arr);
    fwrite($file, $data);

    // 7.关闭文件
    fclose($file);

?>