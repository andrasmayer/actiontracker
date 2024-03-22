<?php
include("../db/pdo_connect.php");

$sql = "
select mngmv.username,
mngmv.dolszam as userID,
mngmv_job_title.name as position

from mngmv
left join mngmv_job_title on mngmv_job_title.id = mngmv.job_title
where username like ? and kilepes = '0000-00-00'
";

$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ "%$_GET[username]%" ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($result);