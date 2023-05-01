<?php
include_once '../../conf/config.php';


$id = $_POST['id'];

$query = "DELETE FROM item_cardapio WHERE id = $id";

$cad_item = $conn->prepare($query);
$cad_item->execute();


if ($cad_item->rowCount()) {
  $response = ['status' => true, 'msg' => "Sucesso"];
} else {
  $response = ['status' => false, 'msg' => "Error"];
}

echo json_encode($response);
