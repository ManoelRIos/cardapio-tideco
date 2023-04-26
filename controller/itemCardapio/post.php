 <?php

  include_once '../../conf/config.php';

  $title       = $_POST['title'];
  $description = $_POST['description'];
  $price       = $_POST['price'];
  $file        = $_FILES['file'];
  $status      = $_POST['status'];

  //Renomeando arquivo
  $rnm_file = md5(time()) . '.png';
  //Caminho para o upload
  $path_upload = "../../public/assets/imgs/";

  $query = "INSERT INTO item_cardapio (title, description, price, image, status) VALUES ('$title', '$description', $price, :file, $status)";

  $cad_item = $conn->prepare($query);
  $cad_item->bindParam(':file', $rnm_file);
  $cad_item->execute();

  if ($cad_item->rowCount()) {
    if (move_uploaded_file($file['tmp_name'], $path_upload . $rnm_file)) {
      $response = ['status' => true, 'msg' => "Sucesso"];
    } else {
      $response = ['status' => false, 'msg' => "Error"];
    }
  } else {
    $response = ['status' => false, 'msg' => "Error"];
  }

  echo json_encode($response);
