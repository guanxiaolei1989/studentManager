<?php

	('Access-Control-Allow-Origin：*');
	// include("../xsdb.class.php");
	include("../mysql.php");
	$db = new mysql();
	$table=$_GET["resource"];
	$companyName=$_GET["companyName"];

		
		  
		    $tables=$db->selectTbale($table,$companyName);
		    $msg = [
		        	 'code' => 200,
		        	 'msg' => '查询成功',
		             'data'=> $tables,
		             'count' => count($tables)
		        ];
			echo json_encode($msg);    
			$db->close();
	

?>
