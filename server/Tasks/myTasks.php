<?php
include("../db/pdo_connect.php");

$sql = "select 
tasks.id,
topics.id as topicId,
tasks.action,
topics.title,
tasks.erTypes,
tasks.expireDate,
tasks.status_2

from tasks 
    left join topics on topics.id = tasks.topicid
where (responsible = ? || delegated = ?) and status_2 = 0";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ $_GET["userID"] , $_GET["userID"] ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);
echo json_encode($result);