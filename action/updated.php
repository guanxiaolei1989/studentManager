<?php
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
	$tid = $_POST["tid"];
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$cardid = $_POST["cardid"];
	$mail = $_POST["mail"];
	$sosperson = $_POST["sosperson"];
	$sosphone = $_POST["sosphone"];
	$school = $_POST["school"];
	$major = $_POST["major"];
	$money = $_POST["money"];
	$educationType = $_POST["educationType"];
	$remarks = $_POST["remarks"];
	$oweafee = $_POST["oweafee"];
	$chengben = $_POST["chengben"];
	$db = new mysql();

	$sql = "update students set tid = '{$tid}',name='{$name}',phone='{$phone}',cardid='{$cardid}',mail='{$mail}',sosperson='{$sosperson}',sosphone='{$sosphone}',school='{$school}',major='{$major}',money='{$money}',educationType='{$educationType}',chengben='{$chengben}',remarks='{$remarks}',oweafee='{$oweafee}'  where id = '{$id}'";

	echo $db->Query($sql);

	$db->close();
?>