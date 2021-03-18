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

    $searchName = $_REQUEST['searchName'];
    $searchCardid = $_REQUEST['searchCardid'];
    $searchSchool = $_REQUEST['searchSchool'];
    $condition = $_REQUEST['condition'];
    $searchTeacher = $_REQUEST['searchTeacher'];
    $ispay = $_REQUEST['ispay'];
    $isBao = $_REQUEST['isBao'];
    $scale = $_REQUEST['scale'];
    $userid = $_REQUEST['userid'];
    
    $sti="select s.Refund,s.isRefund,s.id,s.name,s.phone,s.cardid,s.mail,s.sosperson,s.sosphone,t.tname,s.school,s.major,s.money,s.ispay,s.creattime,s.educationType,s.remarks,s.isTi,s.oweafee,s.isBao from students s  INNER JOIN teachers t ON s.tid = t.id where s.name like '%{$searchName}%' and s.cardid like '%{$searchCardid}%'  and s.isBao like '%{$isBao}%' and s.school like '%{$searchSchool}%' and t.tname like '%{$searchTeacher}%'  and s.ispay like '%{$ispay}%'";
   if($scale==1){
    	
    }
    else  if($scale==2){
    	$sti .= "and s.isTi like '1'";
    }
    else if($scale==3){
    	$sti .= "and s.tid  = '{$userid}'";
    }
    else if($scale==4){
    	
    }else if($scale==5){
    	$sti .= "and s.tid  = '{$userid}'";
    }
    if($condition==0){
	    	$sti .= " order by s.id desc";
    }
   else{
   	    $sti .= "and s.educationType like '%{$condition}%' order by s.id desc";
   }
    
    

    
   $result = mysqli_query($conn,$sti);
	while($row=mysqli_fetch_assoc($result)){
    	$arr[]=$row;
    }
    echo json_encode($arr);
   

?>