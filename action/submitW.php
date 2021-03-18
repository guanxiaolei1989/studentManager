<?php
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
	$db = new mysql();

	$sql = "update students set isTi='1' where id = '{$id}'";

	echo $db->Query($sql);

	$db->close();
?>