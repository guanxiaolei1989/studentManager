<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("mysql.php");
	$db = new mysql();
	$id = $_POST["id"];

	 $sql = "delete from output where id='{$id}'";
	echo $db->Query($sql);

	$db->close();
?>