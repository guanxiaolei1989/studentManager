<?php
	('Access-Control-Allow-Origin：*');
    // include("../xsdb.class.php");
    include("../mysql.php");

    $id = $_POST["id"];
    $month = $_POST["month"];
    $receive = $_POST["receive"];
    $withhold = $_POST["withhold"];
	$remark = $_POST["remark"];
    $time = $_POST["time"];


    $db = new mysql();

    $sql = "update history set month='{$month}',receive='{$receive}',withhold='{$withhold}',remark='{$remark}' where Id = '{$id}'";

    echo $db->Query($sql);
?>