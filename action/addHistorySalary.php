<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("mysql.php");
	$db = new mysql();
	$tname = $_POST["tname"];
	$withhold = $_POST["withhold"];
	$receive = $_POST["receive"];
	$textSara = $_POST["textSara"];
	$month = $_POST["month"];
	$time = $_POST["time"];


	$sql = "INSERT INTO history (tName,month,receive,withhold,remark,time) VALUES ('{$tname}','{$month}','{$receive}','{$withhold}','{$textSara}','{$time}')";

	echo $db->Query($sql);

	$db->close();
?>