<?php
include("../db/pdo_connect.php");




$_POST = [
    "resourceId"=>1,
    "userID"=>266248,
    "type"=>"tasks", //task, vagy topik
    "resourceId"=>1,
    "colname"=>"responsible",
    "value"=>2662480
];








$sql = "select $_POST[colname] from actiontracker_$_POST[type] where id = ?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ $_POST["resourceId"] ]);
$result = $sth->fetch(\PDO::FETCH_COLUMN,0);



if($result != $_POST["value"]){
    echo "mehet<br>";
    /*
    //Ezt már lefuttatja a fire
    $sql = "update actiontracker_$_POST[type] set $_POST[colname] = ? where id = ?";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([ $_POST["value"],$_POST["resourceId"] ]);
    */

    $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
     VALUES (?,?,?,?,?,?)";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([ $_POST["userID"], $_POST["type"], $result, $_POST["value"], $_POST["resourceId"], $_POST["colname"] ]);
}

//echo json_encode($result);

