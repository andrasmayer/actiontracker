<?php

$sql = "select privateHeaders, headerEditor from actiontracker_topics where id = ?";
$sth= $con->prepare($sql);
$sth->execute([ $_POST["id"] ]);
$headers_ = $sth->fetch(\PDO::FETCH_ASSOC);

$editor = json_decode( $headers_["headerEditor"] , true);
$h_keys_1 = [];
foreach($editor as $e_row){
    if( isset($e_row["private"]) && $e_row["private"] == "true"){
      $h_keys_1[] = $e_row["className"];
    }
}

$headers = $headers_["privateHeaders"];
$headers =  str_replace('{','',$headers);
$headers =  str_replace('}','',$headers);
$headers =  explode(',',$headers);
$h_keys2 = [];
foreach( $headers as $row){
   $h_keys_2[] = str_replace('"','',explode(":",$row)[0]);
}

//Bekerülő kulcs
$incomming = array_diff($h_keys_2, $h_keys_1);
if( count($incomming) > 0 ){
   foreach($incomming  as $key){
      $editor[] = ["data"=>str_replace("$$"," ",$key),"className"=>$key,"visible"=>"true","private"=>"true"];
   }
   $sql = "update actiontracker_topics set headerEditor = ? where id = ?";
   $sth= $con->prepare($sql);
   $sth->execute([ json_encode($editor),$_POST["id"] ]);
}

//Kimenő törlése
$temp = [];
$outgoing = array_diff($h_keys_1, $h_keys_2);
if( count($outgoing) > 0){
    foreach($editor  as $key=>$e){
        if( in_array($e["className"], $outgoing) == true){
            unset($editor[$key]);
        }
        else{
            $temp[] = $editor[$key];
        }
    }
        $sql = "update topics set headerEditor = ? where id = ?";
        $sth= $con->prepare($sql);
        $sth->execute([ json_encode($temp),$_POST["id"] ]);
}