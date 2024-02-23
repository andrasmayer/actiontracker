<?php 
    $topic = [];
    include("../db/pdo_connect.php");

    $sql = "select * FROM topics where id = ?";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([$_GET["topicid"]]);  
    $topic = $sth->fetch(\PDO::FETCH_ASSOC);

    if($topic !== false){  
        foreach($topic as $key => $row){
            if( in_array($key, ["contributors"])) {
                $topic[$key] = json_decode($row, true);
            }
        }
        $sql = "select * FROM tasks where topicid = ?";
        $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        $sth->execute([$_GET["topicid"]]);  
        $topic["task"] = $sth->fetchAll(\PDO::FETCH_ASSOC);
    }
echo json_encode($topic);