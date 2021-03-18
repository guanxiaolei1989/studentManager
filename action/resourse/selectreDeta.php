<?php

			('Access-Control-Allow-Origin：*');
			// include("../xsdb.class.php");
			include("../mysql.php");
			$db = new mysql();
			$table=$_GET["resource"];
			$rponame=$_GET["rponame"];
			$typeLo=$_GET["typeLo"];
			$typephj=$_GET["typephj"];
      		/*$sql = "select * from resourcedetails order by id ";*/
      		$sql = "select r.Id,r.rid,r.produ,r.produIntroduce,r.price,r.Agencyprice,r.type,r.remarks,r.Externalprice,re.companyName from resourcedetails r INNER JOIN resource re on r.rid=re.Id where r.produ like '%{$rponame}%' and r.rid like '%{$typeLo}%'and r.type like '%{$typephj}%'";
      		/*$sti="select s.Refund,s.isRefund,s.id,s.name,s.phone,s.cardid,s.mail,s.sosperson,s.sosphone,
      		t.tname,s.school,s.major,s.money,s.ispay,s.creattime,s.educationType,s.remarks,s.isTi,
      		s.oweafee,s.isBao from students s  
      		INNER JOIN teachers t ON s.tid = t.id 
      		where s.name like '%{$searchName}%' 
      		and s.cardid like '%{$searchCardid}%'  
      		and s.isBao like '%{$isBao}%' 
      		and s.school like '%{$searchSchool}%' 
      		and t.tname like '%{$searchTeacher}%'  
      		and s.ispay like '%{$ispay}%'";*/
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
