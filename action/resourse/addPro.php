<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	$name= $_GET["name"];
	$type = $_GET["type"];
	$level = $_GET["level"];
	$cycle = $_GET["cycle"];
	$InformationRequired = $_GET["InformationRequired"];
	$searchWebsite = $_GET["searchWebsite"];
	$remarks = $_GET["remarks"];
	$time = $_GET["time"];
	$addorupdate = $_GET["addorupdate"];
	$id = $_GET["id"];
	
   if($addorupdate ==1 ){

			$sql = "update prointroduce set name='{$name}',type='{$type}',level='{$level}',cycle='{$cycle}',InformationRequired='{$InformationRequired}',searchWebsite='{$searchWebsite}',remarks='{$remarks}',time='{$time}' where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO prointroduce (name,type,level,cycle,InformationRequired,searchWebsite,remarks,time) VALUES ('{$name}','{$type}','{$level}','{$cycle}','{$InformationRequired}','{$searchWebsite}','{$remarks}','{$time}')";
	}
	
    echo $db->Query($sql);

	$db->close();
?>
