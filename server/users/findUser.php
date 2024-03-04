<?php
include("../db/pdo_connect.php");

$sql = "select 
users.username,
users.dolszam as userID,
user_job_titles.name as position 
from users 
left join user_job_titles on user_job_titles.id = users.job_title
where username like ?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ "%$_GET[username]%" ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($result);