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
    $searchTeacher = $_REQUEST['searchTeacher'];
    $scale = $_REQUEST['scale'];
    $userid = $_REQUEST['userid'];
    
    $sti="select * from nosign where name like '%{$searchName}%' and tname like '%{$searchTeacher}%' ";
    if($scale==1){
    	
    }
    else  if($scale==2){
    	$sti .= "and tid  = '{$userid}'";
    }
    else if($scale==3){
    	$sti .= "and tid  = '{$userid}'";
    }
    else if($scale==4){
    	
    }

    

    
    $result = mysqli_query($conn,$sti);
	while($row=mysqli_fetch_assoc($result)){
    	$arr[]=$row;
    }
    echo json_encode($arr);
   

?>