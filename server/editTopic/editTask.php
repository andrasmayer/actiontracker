<?php
include("../db/pdo_connect.php");

$sql = "update actiontracker_tasks set $_POST[column] = ? where id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([$_POST["value"], $_POST["rowid"] ]);
