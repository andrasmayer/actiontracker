<?php

/*
$dsn = 'mysql:dbname=opexdb;host=143.116.140.117';
$user = 'opexrw';
$password = 'Mayerandras-9g5';
$password = '6pnpd7pghz8mpznp';
*/
$dsn = 'mysql:dbname=actiontracker;host=127.0.0.1';
$user = 'root';
$password = '';

//$password = '6pnpd7pghz8mpznp';

try {
    $con = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}


$con->exec("set names utf8");
