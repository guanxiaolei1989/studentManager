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
    $username=$_REQUEST['username'];
    $password = $_REQUEST['password'];
    // $username=$_POST['username'];
    // $password = $_POST['password'];
    $arrays = array(array('one'=>'nameerror','two'=>'passerror'));
    $sqlname = @mysqli_query($conn,"select count(*) from teachers where username= '".$username."'");
    $row = @mysqli_fetch_row($sqlname);
    $num = $row[0];
    //查看用户是否存在
    if(!$num){
        echo json_encode($arrays[0]['one']);//不存在返回nameerror
    }else{
        $sqlpass = @mysqli_query($conn,"select userpwd from teachers where username='".$username."'");//返回一个句柄；
        $passarray = @mysqli_fetch_row($sqlpass);//获得一个只有一行数据的数族
        $passval = $passarray[0];//这里才是对应用户的密码
        //判断该用户的密码是否正确
        if($passval!=$password){
            echo json_encode($arrays[0]['two']);//不正确返回passerror
        }else{
        	$sql = @mysqli_query($conn,"select * from teachers where username= '".$username."'");
        	$row1 = @mysqli_fetch_row($sql);
        	echo json_encode($row1);//登录成功
        }
    }






































// header("Content-type:text/html;charset=UTF-8");

// header("Content-Type:text/json;charset=utf-8,Access-Control-Allow-Origin:*");
// $username=$_GET['username'];
// $password=$_GET['password'];
// $conn = mysqli_connect('localhost','root','123456','student') or die('数据库连接');
// if(!$conn)
// {
//   die("连接错误: " . mysqli_connect_error());
// }
// // 选择数据库
// @mysqli_select_db($conn,"student");
// // 设置编码，防止中文乱码
// @mysqli_set_charset($conn, "utf8");
// /*查询数据*/
// $sql="select * from teachers where username='".$username."' and userpwd='".$password."'";
// $result = mysqli_query($conn,$sql);
// $re = @mysqli_fetch_assoc($result);
// print_r(json_encode($re));

?>