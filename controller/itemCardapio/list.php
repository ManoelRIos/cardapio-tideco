<?php

include_once '../../conf/config.php';

//Cria a query
$query = "SELECT id, title, description, price, image, status, categoria FROM item_cardapio LIMIT 10";
//Executa query
$resp = $conn->prepare($query);
$resp->execute();

while ($row = $resp->fetch(PDO::FETCH_ASSOC)) {
  extract($row);
  $dados[] = $row;
}

/* echo $dados; */
echo json_encode($dados);
