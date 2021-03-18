<?php
	/*num   1 是添加已经返费  2是添加返费金额*/
	('Access-Control-Allow-Origin：*');
	include("mysql.php");
	$id = $_POST["id"];
	$Refund = $_POST["Refund"];
	$num = $_POST["num"];
	
	$db = new mysql();
	if($num==1){
		$sql = "update students set isRefund='1' where id = '{$id}'";
	}
	else if($num==2){
		$sql = "update students set Refund='{$Refund}' where id = '{$id}'";
	}
	
	

	echo $db->Query($sql);

	$db->close();
?>