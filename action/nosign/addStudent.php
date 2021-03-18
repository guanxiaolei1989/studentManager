<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	$id= $_POST["id"];
	$name = $_POST["name"];
	$iphone = $_POST["iphone"];
	$education = $_POST["education"];
	$parentName = $_POST["parentName"];
	$parentIphone = $_POST["parentIphone"];
	$kind = $_POST["kind"];
	$tid = $_POST["tid"];
	$tname = $_POST["tname"];
	$remarks = $_POST["remarks"];
	$home = $_POST["home"];
	$time = $_POST["time"];
   if($id >0 ){
			$sql = "update nosign set name='{$name}',iphone='{$iphone}',education='{$education}',parentName='{$parentName}',parentIphone='{$parentIphone}',kind='{$kind}',tid='{$tid}',tname='{$tname}',remarks='{$remarks}',home='{$home}',time='{$time}'  where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO nosign (name,iphone,education,parentName,parentIphone,kind,tid,tname,remarks,home,time) VALUES ('{$name}','{$iphone}','{$education}','{$parentName}','{$parentIphone}','{$kind}','{$tid}','{$tname}','{$remarks}','{$home}','{$time}')";
	}
	
    echo $db->Query($sql);

	$db->close();
?>