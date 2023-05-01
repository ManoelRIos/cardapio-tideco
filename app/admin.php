<?php

include './../includes/header.php';
include_once './../conf/config.php';

?>

<nav class="navbar navbar-light bg-warning" style="margin: .8rem; border-radius: 9px; position: fixed;">
  <div class="content-nav" style="padding: .5rem;">
    <a href="./index.php"><h2>TIDECO</h2></a>     
  </div>
</nav>

<div class="content" style="padding: 1rem 10rem">

  <!-- <form action="post.php"> -->
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="row">
          <div class="col-md-10">
            <h2>Controle de itens do cardápio</h2>
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary col-md-12" style="display: flex; align-items: center; gap: 1rem;" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><span class="material-symbols-outlined">
                add_box
              </span>NOVO ITEM</button>
          </div>
        </div>
      </div>
      <div class="panel-body">
        <table class="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>TÍTULO</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>IMAGEM</th>
              <th>CATEGORIA</th>
              <th>STATUS</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formItemCardapio" class="needs-validation" novalidate>
      <!-- <form action="postItemCardapio.php" method="POST" id="formItemCardapio"> -->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Novo Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group col-md-12 p-2">
            <label for="title">Título</label>
            <input type="text" class="form-control" id="title" required name="title">
          </div>

          <div class="form-group col-md-12 p-2">
            <label for="title">Descrição</label>
            <input type="text" class="form-control" id="description" required name="description">
          </div>

          <div class="form-group col-md-12 p-2">
            <label for="title">Preço</label>
            <input type="number" class="form-control" id="price" required name="price">
          </div>

          <div class="form-group col-md-12 p-2">
            <label for="title">Imagem</label>
            <input type="file" class="form-control btn btn-default" type="image/*" id="image" required name="image">
          </div>

          <div class="form-group col-md-12 p-2">
            <label for="title">Categoria</label>
            <input type="text" class="form-control" id="categoria" required name="categoria">
          </div>

          <div class="form-group col-md-12 p-2">
            <label for="">Status</label>
            <select class="form-select" aria-label="Default select example" id="status" required name="status">
              <option value="1">Ativo</option>
              <option value="0">Inativo</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
          <input type="submit" class="btn btn-primary" value="Enviar"></input>
        </div>
      </div>
    </form>
  </div>
</div>

<?php
include './../includes/footer.php';
