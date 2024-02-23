<?php
include("../db/pdo_connect.php");

$sql = "update tasks set $_POST[column] = ? where topicid = ? and id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([$_POST["value"], $_POST["topicid"], $_POST["rowid"] ]);
