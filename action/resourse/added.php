<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	
	$id = $_GET["id"];
	$type = $_GET["type"];
	$level = $_GET["level"];
	$ject = $_GET["ject"];
	$produ = $_GET["produ"];
	$price = $_GET["price"];
	$Agencyprice = $_GET["Agencyprice"];
	$Externalprice = $_GET["Externalprice"];
	$remarks = $_GET["remarks"];
	$addorupdate = $_GET["addorupdate"];
    $xuezhi = $_GET["xuezhi"];

/*	  
 * 
 * type: 1
level: 1
produIntroduce: 名　字
ject: 
price: 合作价格
Agencyprice: 代理价格
Externalprice: 市场价格
remarks: 备　注
xuezhi: 两年半
addorupdate: 0
    
CREATE TABLE `educational` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `produ` varchar(255) DEFAULT NULL COMMENT '学校名字',
  `ject` varchar(255) DEFAULT NULL COMMENT '专业',
  `price` varchar(255) DEFAULT NULL COMMENT '渠道价格',
  `Agencyprice` varchar(255) DEFAULT NULL COMMENT '代理学费',
  `Externalprice` varchar(255) DEFAULT NULL COMMENT '市场价格',
  `level` varchar(255) DEFAULT NULL COMMENT '专起本层次',
  `xuezhi` varchar(255) DEFAULT NULL COMMENT '多久',
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注',
  `type` varchar(255) DEFAULT NULL COMMENT '1自考 2成人 3网教 4 研究生',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='二学历';

*/
	if($addorupdate ==1 ){
			$sql = "update educational set produ='{$produ}',ject='{$ject}',price='{$price}',Agencyprice='{$Agencyprice}',Externalprice='{$Externalprice}',level='{$level}',xuezhi='{$xuezhi}',remarks='{$remarks}',type='{$type}'  where id = '{$id}'";
	}
	else{
			$sql = "INSERT INTO educational (produ,ject,price,Agencyprice,Externalprice,level,xuezhi,remarks,type) VALUES ('{$produ}','{$ject}','{$price}','{$Agencyprice}','{$Externalprice}','{$level}','{$xuezhi}','{$remarks}','{$type}')";
	}

    echo $db->Query($sql);

	$db->close();
?>
