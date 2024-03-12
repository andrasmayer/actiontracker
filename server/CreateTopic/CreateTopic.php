<?php
include("../db/pdo_connect.php");

if( !isset($_POST["privateHeaders"]) ){ $_POST["privateHeaders"] = []; }

session_start();
$sql = "INSERT INTO `topics`( `title`, `description`, `creator`, `creationDate`, `contributors`, `erTypes`, `privateHeaders`) 
VALUES (?,?,?,?,?,?,?)";

$stmt= $con->prepare($sql);
$stmt->execute([
   $_POST["title"],
   $_POST["description"],
   $_POST["contributors"][0],
   date("Y-m-d H:i:s"),
   json_encode($_POST["contributors"]),
   json_encode($_POST["erTypes"]),
   json_encode($_POST["privateHeaders"])

]);


$sql = "select max(id) from topics";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ ]);
$topicId = $sth->fetch(\PDO::FETCH_COLUMN,0);
echo json_encode($topicId);