<?php
// $mahasiswa =[
// 	 [
// 	"nama" => "Taufik Agung Santoso",
// 	"nrp" => "14116007",
// 	"email" => "taufikagungsantoso17@gmail.com"
// ],
// [
// 	"nama" => "ilman",
// 	"nrp" => "14116017",
// 	"email" => "ilman@gmail.com"
// ]
// ];

// var_dump($mahasiswa); // ini akan membentuk array assosiatif

$dbh = new PDO('mysql:host=localhost;dbname=karir', 'root','');
$db = $dbh->prepare('SELECT * FROM kabupaten');
$db->execute();
$kabupaten = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($kabupaten);
echo $data;

 ?>
