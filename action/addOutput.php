<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("mysql.php");
	$db = new mysql();
	$id = $_POST["id"];
	$name = $_POST["name"];
	$money = $_POST["money"];
	$peopleName = $_POST["peopleName"];
	$agree = $_POST["agree"];
	$reason = $_POST["reason"];
	$time = $_POST["time"];
	if($id >0 ){
		$sql = "update output set name='{$name}',money='{$money}',peopleName='{$peopleName}',agree='{$agree}',reason='{$reason}',time='{$time}'  where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO output (name,money,peopleName,agree,reason,time) VALUES ('{$name}','{$money}','{$peopleName}','{$agree}','{$reason}','{$time}')";
	}


	echo $db->Query($sql);
    $db->close();
?>