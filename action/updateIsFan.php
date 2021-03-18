<?php
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
	$db = new mysql();


	echo $db->Query($sql);

	$db->close();
?>