<?php

include_once '../../conf/config.php';

$id = $_GET['id'];

//Cria a query
$query = "SELECT id, title, description, price, image, status FROM item_cardapio WHERE id = $id";
//Executa query
$resp = $conn->prepare($query);
$resp->execute();

while ($row = $resp->fetch(PDO::FETCH_ASSOC)) {
  extract($row);
  $dados[] = $row;
}

/* echo $dados; */
echo json_encode($dados);
