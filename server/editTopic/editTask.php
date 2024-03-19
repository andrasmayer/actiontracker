<?php
session_start();
include("../db/pdo_connect.php");

$sql = "update actiontracker_tasks set $_POST[column] = ? where id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([$_POST["value"], $_POST["rowid"] ]);









//ChangeLog


changeLog($_SESSION["userID"], "tasks",  $_POST["rowid"],  $_POST["column"], $_POST["value"]);

function changeLog( $userID, $type, $resourceId, $colname, $value){

//    if($colname == "addin"){ $value = json_encode($value); }
    global $con;

    $sql = "select $colname from actiontracker_$type where id = ?";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([ $resourceId ]);
    $result = $sth->fetch(\PDO::FETCH_COLUMN,0);



echo json_encode([ $userID, $type, $result, $value, $resourceId, $colname ]);

    if($result != $_POST["value"]){
        $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
        VALUES (?,?,?,?,?,?)";
        $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        $sth->execute([ $userID, $type, $result, $value, $resourceId, $colname ]);
    }
    

    
}



