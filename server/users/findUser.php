<?php
include("../db/pdo_connect.php");

$sql = "
select mngmv.username,
mnmgv.dolszam,
mngmv_job_title.name as position

from mngmv
left join mngmv_job_title on mngmv_job_title.id = mngmv.job_title
where username like ?
";

$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ "%$_GET[username]%" ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($result);