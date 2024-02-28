<?php
include("../db/pdo_connect.php");

$task = $_POST["task"];

$sql = "INSERT INTO `tasks`( `erTypes`, `responsible`, `status_1`, `status_2`, `comment`,  `expireDate`, `addin`, `topicid`) 
VALUES (?,?,?,?,?,?,?,?)";

$stmt= $con->prepare($sql);
$stmt->execute([
    $task["erTypes"],
    $task["responsible"],
    $task["status_1"],
    $task["status_2"],
    $task["comment"],
    $task["expireDate"],
    json_encode($task["addin"]),
    $_POST["topicid"]
]);
	


$sql = "select max(id)  from tasks where topicid = ?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ $_POST["topicid"] ]);
$taskId = $sth->fetch(\PDO::FETCH_COLUMN,0);

echo json_encode($taskId);