<?php
class Mysql{
     private static $host="localhost";
     private static $user="root";
     private static $password="root";
     private static $dbName="student";           //数据库名
     private static $charset="utf8";          //字符编码
     private static $port="3306";            //端口号
     public $conn=null;
     function __construct(){
       $this->conn=new mysqli(self::$host,self::$user,self::$password,self::$dbName,self::$port);
       if(!$this->conn)
       {
          die("数据库连接失败！".$this->conn->connect_error);
       }else{
         $this->conn->query("set names ".self::$charset);
       }

     }


     function Query($sql)
    {
        $res=$this->conn->query($sql);
            return $res;
    }

     //执行sql语句
     function sql($sql){
       $res=$this->conn->query($sql);
     if(!$res)
       {
          echo "数据操作失败";
       }
       else
       {
          if($this->conn->affected_rows>0)
          {
             return $res;
          }
          else
          {
            echo "0行数据受影响！";
          }
       }
     }
     //返回受影响数据行数
     function getResultNum($sql){
      $res=$this->conn->query($sql);
      return mysqli_num_rows($res);
      }
      /*查询表格*/
      public function selectTbale($_tabl,$sea){
      	if($sea==""){
      		$sql = "select * from ".$_tabl." order by id ";
      	
      	    $result = $this->conn->query($sql);
			while($row=mysqli_fetch_assoc($result)){
		    	$arr[]=$row;
		    }
		    return  $arr;
      	}
      	else{
      		if($_tabl=="resource"){
      			$sql = "select * from ".$_tabl." where companyName like '%{$sea}%' order by id  ";
	      	    
      		}else if($_tabl=="prointroduce"){
      			$sql = "select * from ".$_tabl." where name like '%{$sea}%' order by id  ";
      		}else if($_tabl=="resourcedetails"){
      			
      		}
      		$result = $this->conn->query($sql);
				while($row=mysqli_fetch_assoc($result)){
			    	$arr[]=$row;
			    }
			    return  $arr;
       	}
      }
      public function deleteTbale($tabl,$id){
      	 $sql = $sql = "delete from ".$tabl." where id='{$id}'";
      	return $this->Query($sql);

      }
     //关闭数据库
     public function close()
     {
       @mysqli_close($this->conn);
     }
}
?>