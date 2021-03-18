<?php
	('Access-Control-Allow-Origin：*');
    // include("../xsdb.class.php");
	include("../mysql.php");
     $table = $_GET["table"];
     $id = $_GET["id"];
     $db = new mysql();
     $arl= $db->deleteTbale($table,$id);
     echo $arl;
     $db->close();
?>