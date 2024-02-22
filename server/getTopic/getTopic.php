<?php 

    include("../db/pdo_connect.php");

    if($con){echo "Kapcsolódás sikeres";}

    $sql = "select * FROM topics where id = ?";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([1]);
    $topic = $sth->fetch(\PDO::FETCH_ASSOC);
    //var_dump($result);
    foreach($topic as $key => $row){
        if( in_array($key, ["contributors", "erTypes"])) {
            echo"1234";
            $topic[$key] = json_encode($row, true);
        }
        //echo"$key : $row<br><br>";
        echo $key;
        var_dump($topic[$key]); 
        //$isJson = count(json_encode($row, true));
        //$isJson = json_encode($row, true) === false ? $row : json_encode($row, true);
        //var_dump($isJson);


        //echo json_encode($row, true);
        echo"<br>";
        echo"<br>";

    }


