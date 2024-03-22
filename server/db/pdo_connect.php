<?php
$dsn = 'mysql:dbname=opexdb;host=143.116.140.117';
$user = 'opexrw';
$password = 'Mayerandras-9g5';
$password = '6pnpd7pghz8mpznp';
//$password = '6pnpd7pghz8mpznp';

try {
    $con = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}


$con->exec("set names utf8");

/*
$sql = "INSERT INTO fqa_error(empNo,created,sn,creator,relevant) VALUES (?,?,?,?,?)";
$stmt= $con->prepare($sql);
$stmt->execute([$_POST['empNo'],date("Y-m-d H:i:s"),"$_POST[SN]",$_SESSION["dolszam"],$_POST["relevant"]]);
	
	
	
	
	$sql = "UPDATE users SET name=?, surname=?, sex=? WHERE id=?";
$stmt= $con->prepare($sql);
$stmt->execute([$name, $surname, $sex, $id]);
	
	
	
	
	
	
	
	



$sql = 'select emp_id from "Access"."EASE_Employee_Card" '.	$where;

//$result = $con->query($sql)->fetchALL(\PDO::FETCH_OBJ);
//$result = $con->query($sql)->fetchALL(\PDO::FETCH_ASSOC);
 $result = $con->query($sql)->fetchALL(\PDO::FETCH_COLUMN,0);
	
	
	
	
	
	

$sql = "select max(id) from projectManagement_projects where creator=?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([$_SESSION["dolszam"]]);
$result = $sth->fetchAll(\PDO::FETCH_COLUMN,0);
	
*/