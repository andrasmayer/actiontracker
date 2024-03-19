<?php
include("../db/pdo_connect.php");

if( !isset($_POST["privateHeaders"]) ){ $_POST["privateHeaders"] = '{}'; }

$sql = "update actiontracker_topics set title = ?, description = ?, contributors = ?, erTypes = ?, privateHeaders = ? where id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([
   $_POST["title"],
   $_POST["description"],
   json_encode($_POST["contributors"]),
   json_encode($_POST["erTypes"]),
   json_encode($_POST["privateHeaders"]),
   $_POST["id"]
]);


include("headers.php");