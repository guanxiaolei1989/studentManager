<?php
	('Access-Control-Allow-Origin：*');
	include("../mysql.php");
	$salary = $_POST["salary"];
	$id = $_POST["id"];
	$db = new mysql();

	$sql = "update teachers set salary='{$salary}'  where id = '{$id}'";

	echo $db->Query($sql);

	$db->close();
?>