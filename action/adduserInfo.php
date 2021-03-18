<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("mysql.php");
	$db = new mysql();

	$username = $_POST["username"];
	$userpwd = $_POST["userpwd"];
	$tname = $_POST["tname"];
	$tphone = $_POST["tphone"];
	$yhc = $_POST["yhc"];
	$idCard = $_POST["idCard"];
	$scale = $_POST["scale"];
	$salary = $_POST["salary"];


	// $sql = "select id from teachers where username = '{$teacherName}'";//通过当前登录用户名查找id
	// $tId = $db->StrQuery($sql,1)[0];
	//echo $tId;
	$sql = "INSERT INTO teachers (username,userpwd,tname,tphone,yhc,idCard,scale,salary) VALUES ('{$username}','{$userpwd}','{$tname}','{$tphone}','{$yhc}','{$idCard}','{$scale}','0')";

	echo $db->Query($sql);

	$db->close();
?>