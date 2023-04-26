
<?php

include_once '../../conf/config.php';

//Cria a query
$query = "SELECT id, title, description, price, image, status FROM item_cardapio LIMIT 10";
//Executa query
$resp = $conn->prepare($query);
$resp->execute();

$dados = "";
while ($row = $resp->fetch(PDO::FETCH_ASSOC)) {
  extract($row);
  /* $dados[] = $row; */
  $dados .= "
  <tr>
    <td scope='row'>$id</td>
    <td>$title</td>
    <td>$description</td>
    <td>$price</td>
    <td>
      <a href='../public/assets/imgs/$image' target='_blank' class='btn btn-info'><i class='fa-regular fa-eye' style='color: #ffffff;'></i></a>
      <button type='button' class='btn btn-warning'><i class='fa-regular fa-pen-to-square' style='color: #ffffff;'></i></button>
    </td>
    <td>
      <select class='form-select' aria-label='Default select example' id='status_$id' name='status_$id' value='$status'>
        <option value='1'>Ativo</option>
        <option value='0'>Inativo</option>
      </select>
    </td>
    <td>
      <div class='btn-group' >
        <button type='button' class='btn btn-warning'><i class='fa-regular fa-pen-to-square' style='color: #ffffff;'></i></button>
        <button type='button' class='btn btn-danger'><i class='fa-solid fa-trash' style='color: #ffffff;'></i></button>
      </div>
    </td>
  </tr>";
}

echo $dados;



/* echo json_encode($dados); */
