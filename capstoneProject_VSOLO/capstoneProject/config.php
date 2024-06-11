<!-- config.php -->

<?php

$host = 'localhost';    //Host
$dbname = 'testbase'; //DB-Name
$user = 'tester';        //Username
$pass = 'comptest';        //Password
$chrs = 'utf8mb4';      //Char Set


$attr = "mysql:host=$host;dbname=$dbname;charset=$chrs"; 

$opts =
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,      
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, 
        PDO::ATTR_EMULATE_PREPARES => false,             
    ];
?>