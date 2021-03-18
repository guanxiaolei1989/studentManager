<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	$addorupdate= $_GET["addorupdate"];
	$companyName = $_GET["companyName"];
	$contactsIphone = $_GET["contactsIphone"];
	$contacts = $_GET["contacts"];
	$remarks = $_GET["remarks"];
	$shenfenType = $_GET["shenfenType"];
	$id = $_GET["id"];
	
   if($addorupdate ==1 ){

			$sql = "update resource set companyName='{$companyName}',contactsIphone='{$contactsIphone}',contacts='{$contacts}',remarks='{$remarks}',shenfenType='{$shenfenType}'   where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO resource (companyName,contactsIphone,contacts,remarks,shenfenType) VALUES ('{$companyName}','{$contactsIphone}','{$contacts}','{$remarks}','{$shenfenType}')";
	}
	
    echo $db->Query($sql);

	$db->close();
?>