<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	
	$id = $_GET["id"];
	$type = $_GET["type"];
	$produ= $_GET["produ"];
	$produIntroduce = $_GET["produIntroduce"];
	$price = $_GET["price"];
	$Agencyprice = $_GET["Agencyprice"];
	$Externalprice = $_GET["Externalprice"];
	$remarks = $_GET["remarks"];
	$time = $_GET["time"];
	$addorupdate = $_GET["addorupdate"];
	$rid = $_GET["rid"];

/*	        
			type: type,
			produ: produ,
			produIntroduce: produIntroduce,
			price: price,
			Agencyprice: Agencyprice,
			Externalprice:Externalprice,
			searchWebsite
			remarks:remarks,
			time:time,
            addorupdate
			id: id
*/
	if($addorupdate ==1 ){
			$sql = "update resourcedetails set type='{$type}',produ='{$produ}',type='{$type}',produIntroduce='{$produIntroduce}',price='{$price}',Agencyprice='{$Agencyprice}',Externalprice='{$Externalprice}',remarks='{$remarks}',time='{$time}'  where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO resourcedetails (type,produ,produIntroduce,price,Agencyprice,Externalprice,remarks,time,rid) VALUES ('{$type}','{$produ}','{$produIntroduce}','{$price}','{$Agencyprice}','{$Externalprice}','{$remarks}','{$time}','{$rid}')";
	}
/*	echo $sql;*/
    echo $db->Query($sql);

	$db->close();
?>
