<?php

			('Access-Control-Allow-Origin：*');
			include("../mysql.php");
			$db = new mysql();
			$rponame=$_GET["rponame"];
			$typephj=$_GET["typephj"];
      		$sql = "select * from educational  where produ like '%{$rponame}%' and  type like '%{$typephj}%'";
      		
      		$result = mysqli_query($db->conn,$sql);
			while($row=mysqli_fetch_assoc($result)){
		    	$tables[]=$row;
		   }
		    $msg = [
		        	 'code' => 200,
		        	 'msg' => '查询成功',
		             'data'=> $tables,
		             'count' => count($tables)
		        ];
			echo json_encode($msg);   
			$db->close();
	

?>
