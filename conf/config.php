<?php

$HOST = 'localhost';
$USER = 'root';
$PASS = '';
$DBNAME = 'cardapio_digital';
$PORT = 3306;


try {
  $conn = new PDO("mysql:host=$HOST;port=$PORT;dbname=" . $DBNAME, $USER, $PASS);
  /* echo "Conexäo com banco de dados concluída com sucesso!"; */
  
} catch (PDOException $err) {
  echo "Erro: Conexão com banco de dados não foi realizada com sucesso!" . $err->getMessage();
}

