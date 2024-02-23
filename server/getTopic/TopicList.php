<?php

include("../db/pdo_connect.php");

$sql = "select * FROM topics";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([]);  
$topic = $sth->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($topic);