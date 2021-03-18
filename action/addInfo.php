<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("mysql.php");
	$db = new mysql();
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
	$ispay = $_POST["ispay"];
	$creattime = $_POST["creattime"];
	$educationType = $_POST["educationType"];
	$remarks = $_POST["remarks"];
	$oweafee = $_POST["oweafee"];

/*tid: 2
educationType: 成人教育
school: 　　院　校　
major: 　　专　业　
name: 　　姓　名
phone: 　　手　机
cardid: 　身份证号码　
mail: 　　邮　箱
sosperson: 　紧急联系人
sosphone: 紧急联系人手机
remarks: 　　备　注　
money: 　 缴 费 金 额
oweafee: 欠 费 金 额
ispay: 待缴费
creattime: 2020年9月21日 9:55:37*/
	// $sql = "select id from teachers where username = '{$teacherName}'";//通过当前登录用户名查找id
	// $tId = $db->StrQuery($sql,1)[0];
	//echo $tId;
	$sql = "INSERT INTO students (tid,name,phone,cardid,mail,sosperson,sosphone,school,major,money,ispay,creattime,educationType,remarks,oweafee) VALUES ('{$tid}','{$name}','{$phone}','{$cardid}','{$mail}','{$sosperson}','{$sosphone}','{$school}','{$major}','{$money}','{$ispay}','{$creattime}','{$educationType}','{$remarks}','{$oweafee}')";

	echo $db->Query($sql);

	$db->close();
?>