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

    // $searchText = $_REQUEST['searchText'];
    //  $id = $_REQUEST['id'];
    //  $scale = $_REQUEST['scale'];

    // $searchCardid = $_REQUEST['searchCardid'];
    // $searchSchool = $_REQUEST['searchSchool'];
    // $condition = $_REQUEST['condition'];
    // if($scale==1){
    	//  $sql = "select * from teachers where id !=0 and tname like '%{$searchText}%'  order by id desc";
    // }
    // else{
    	 $sql = "select * from teachers";
    // }
   
    $result = mysqli_query($conn,$sql);
	while($row=mysqli_fetch_assoc($result)){
    	$arr[]=$row;
    }
    echo json_encode($arr);
?>