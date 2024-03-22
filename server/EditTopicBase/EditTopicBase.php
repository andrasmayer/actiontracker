<?php
session_start();
include("../db/pdo_connect.php");

if( !isset($_POST["privateHeaders"]) ){ $_POST["privateHeaders"] = '{}'; }


/********************************************
 *              ChangeLog                   *
 *                                          *
 *******************************************/
$postedValues = $_POST;
// changeLog($_SESSION["userID"], "topics",  $_POST["id"],  $_POST["column"], $_POST["value"]);
echo json_encode($postedValues);
 function changeLog( $userID, $type, $resourceId, $colname, $value){
     global $con;
     echo json_encode($_POST);
 /*
     $sql = "select $colname from actiontracker_$type where id = ?";
     $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
     $sth->execute([ $resourceId ]);
     $result = $sth->fetch(\PDO::FETCH_COLUMN,0);
 
     if($result != $_POST["value"]){
 
         if($_POST["column"]  == "addin"){
             $tempValue_post = json_decode($_POST["value"],true);
             $tempValue_original = json_decode($result,true);
 
             foreach($tempValue_original as $key=>$val){
                 if($val != $tempValue_post[$key]){
                     $colname = str_replace("$$"," ",$key);
                     
                     $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
                     VALUES (?,?,?,?,?,?)";
                     $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
                     $sth->execute([ $userID, $type, $val, $tempValue_post[$key], $resourceId, $colname ]);
 
                 }
             }
         }
         else{
             $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
             VALUES (?,?,?,?,?,?)";
             $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
             $sth->execute([ $userID, $type, $result, $value, $resourceId, $colname ]);
         }
     }
     */
 }



/********************************************
 *              Update cells                *
 *                                          *
 *******************************************/


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