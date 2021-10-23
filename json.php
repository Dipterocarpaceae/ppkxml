<?php 
    $jsonnn = file_get_contents("https://www.cnnindonesia.com/nasional/rss");

    $jsons = json_decode($jsonnn, true);
    echo $jsons;
?>