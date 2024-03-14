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
        $sql = "select tasks.*,users.username as responsibleName,users2.username as delegatedName
         FROM tasks
        left join users on users.dolszam = tasks.responsible
        left join users users2 on users2.dolszam = tasks.delegated
        where topicid = ? order by tasks.id";
        $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
        $sth->execute([$_GET["topicid"]]);  
        $topic["task"] = $sth->fetchAll(\PDO::FETCH_ASSOC);
        $topic["contributorNames"] = [];

        forEach($topic["contributors"] as $userID){
            $sql = "select username from users where dolszam = ?";
            $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
            $sth->execute([$userID]);  

            $topic["contributorNames"][] =  ["username"=>$sth->fetch(\PDO::FETCH_COLUMN,0), "userID"=>$userID];
        }
    }
echo json_encode($topic);