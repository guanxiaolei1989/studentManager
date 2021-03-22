<?php
    header("Content-Type:text/html;charset=utf-8,Access-Control-Allow-Origin:*");
    $conn = mysqli_connect('localhost','root','root','student') or die('数据库连接');
	if(!$conn)
	{
	  die("连接错误: " . mysqli_connect_error());
	}
	// 选择数据库
	@mysqli_select_db($conn,"student");
	// 设置编码，防止中文乱码
	@mysqli_set_charset($conn, "utf8");
    $id=$_REQUEST['id'];
    $classify=$_REQUEST['classify'];
if($classify == "teachers"){
	$sql = "select * from ".$classify." where id = '{$id}'";
}else{
	$sql = "select s.id,s.tid,s.name,s.phone,s.cardid,s.mail,s.sosperson,s.sosphone,t.tname,s.school,s.major,s.money,s.ispay,s.creattime,s.educationType,s.remarks,s.isTi,s.oweafee,s.isBao FROM students s INNER JOIN teachers t ON s.tid = t.id where s.id = '{$id}'";
}
// $sql = "select s.id,s.tid,s.name,s.phone,s.cardid,s.mail,s.sosperson,s.sosphone,t.tname,s.school,s.major,s.money,s.ispay,s.creattime,s.educationType,s.remarks,s.isTi,s.oweafee,s.isBao FROM ".$classify." s INNER JOIN teachers t ON s.tid = t.id where id = '{$id}'"


    
    //$sql = "select s.id,s.tid,s.name,s.phone,s.cardid,s.mail,s.sosperson,s.sosphone,t.tname,s.school,s.major,s.money,s.ispay,s.creattime,s.educationType,s.remarks,s.isTi,s.oweafee,s.isBao FROM students s INNER JOIN teachers t ON s.tid = t.id where s.id = '{$id}'";

    $result = mysqli_query($conn,$sql);

	while($row=mysqli_fetch_assoc($result)){
    	$arr[]=$row;
    }
    echo json_encode($arr);
?>