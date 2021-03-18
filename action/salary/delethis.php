<?php
	('Access-Control-Allow-Origin：*');
    // include("../xsdb.class.php");
    include("../mysql.php");
    $id = $_POST["id"];
    $db = new mysql();
    $sql = "delete from history where Id='{$id}'";

    echo $db->Query($sql);

    $db->close();
?>