<?php

include_once '../../conf/config.php';

$id          = $_POST['id'];
$title       = $_POST['title'];
$description = $_POST['description'];
$price       = $_POST['price'];
$status      = $_POST['status'];
$categoria   = $_POST['categoria'];

//Criar um if para cada dado que foi passado para validar
if (empty($id)) {
  $resp = ['status' => false, 'msg' => 'Erro'];
} elseif (isset($_FILES['image'])) {
  $image = $_FILES['image'];
  $query = "UPDATE item_cardapio SET  image=:image WHERE id = $id";
  //Renomeando arquivo
  $rnm_file = md5(time()) . '.png';
  //Caminho para o upload
  $path_upload = "../../public/assets/imgs/";
  $edit_item = $conn->prepare($query);
  $edit_item->bindParam(':image', $rnm_file);
  if ($edit_item->execute()) {
    if (move_uploaded_file($image['tmp_name'], $path_upload . $rnm_file)) {
      $resp = ['status' => true, 'msg' => "Sucesso", 'id' => $id];
    } else {
      $resp = ['status' => false, 'msg' => 'img'];
    }
  } else {
    $resp = ['status' => false, 'msg' => 'Deu ruim'];
  }
} elseif (empty($title)) {
  $resp = ['status' => false, 'msg' => 'Titulo invalido'];
} else {

  $query =
    "UPDATE item_cardapio 
   SET title='$title', description='$description', price=$price, status=$status, categoria='$categoria'
   WHERE id = $id";

  $edit_item = $conn->prepare($query);
  // $edit_item->bindParam(':image', $rnm_file);
  if ($edit_item->execute()) {
    $resp = ['status' => true, 'msg' => "Sucesso", 'id' => $id];
  } else {
    $resp = ['status' => false, 'msg' => 'Deu ruim'];
  }
}

echo json_encode($resp);
