<?php
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
    $num = $_POST["num"];
	$db = new mysql();
     /*num 2是确认缴费   1是已报名*/
    if($num==1){
    	$sql = "update students set isBao='1' where id = '{$id}'";
    }
    else if($num==2){
    	$sql = "update students set ispay='1' where id = '{$id}'";
    }
	
   
	echo $db->Query($sql);

	$db->close();
?>