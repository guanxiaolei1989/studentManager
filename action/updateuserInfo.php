<?php
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
    $username = $_POST["username"];
	$userpwd = $_POST["userpwd"];
	$tname = $_POST["tname"];
	$tphone = $_POST["tphone"];
	$yhc = $_POST["yhc"];
	$idCard = $_POST["idCard"];
	$scale = $_POST["scale"];
	$salary = $_POST["salary"];


	$db = new mysql();

	$sql = "update teachers set username='{$username}',userpwd='{$userpwd}',tname='{$tname}',tphone='{$tphone}',yhc='{$yhc}',idCard='{$idCard}',scale='{$scale}',salary='{$salary}' where id = '{$id}'";

	echo $db->Query($sql);

	$db->close();
?>