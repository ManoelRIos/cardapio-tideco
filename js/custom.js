//Get ALl Itens Cardapio
const getAllItens = async () => {
  const dados = await fetch("../controller/itemCardapio/list.php");
  const response = await dados.json();
  return response;
};

const getItem = async (id) => {
  const item = await fetch("../controller/itemCardapio/get.php?id=" + id);
  const response = await item.json();
  return response;
};

//Post Item Do Cardapio
const itemCardForm = $("#formItemCardapio");
if (itemCardForm) {
  itemCardForm.on("submit", async (e) => {
    e.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var file = $("#image")[0].files[0];
    var categoria = $("#categoria").val();
    var status = $("#status").val();

    var dadosForm = new FormData();

    dadosForm.append("title", title);
    dadosForm.append("description", description);
    dadosForm.append("price", price);
    dadosForm.append("file", file);
    dadosForm.append("categoria", categoria);
    dadosForm.append("status", status);

    const dadosPosted = await fetch("../controller/itemCardapio/post.php", {
      method: "POST",
      body: dadosForm,
    });

    //Ler dados retornados do arquivo post.php
    const response = await dadosPosted.json();

    if (response["status"]) {
      console.log("PASSOU");
      listItensOnTable();
      alertaSweetAlert2("success", "Sucesso", "Item cadastrado com sucesso!");
    } else {
      alertaSweetAlert2("error", "Item Não Cadastrado", "Entre em contato com o administrador!");
      //msg -> response['msg] -> erro
    }
  });
}

//DELETE

async function deleteItemCardapio(id) {
  id = id.replace("btn_delete", "");
  Swal.fire({
    icon: "info",
    title: "Tem certeza que deseja deletar?",
    showCancelButton: true,
    confirmButtonText: "Deletar",
    cancelButtonText: "Voltar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      var idItemCardapio = $("#id" + id).text();
      var idDeleted = new FormData();
      idDeleted.append("id", idItemCardapio);
      const dadosDeleted = await fetch("../controller/itemCardapio/delete.php", {
        method: "POST",
        body: idDeleted,
      });
      const response = await dadosDeleted.json();
      if (response["status"]) {
        alertaSweetAlert2("success", "Sucesso", "Item deletado com sucesso!");

        listItensOnTable();
      } else {
        alertaSweetAlert2("error", "Oops...", "Houve um problema ao deletar o item!");
      }
    } else if (result.isDenied) {
    }
  });
}

//PUT
async function putItemCardapio(btnId) {
  btnId = btnId.replace("btn_save", "");
  var id = $("#id" + btnId).text();
  console.log(id);
  var title = $("#title" + btnId).val();
  var description = $("#description" + btnId).val();
  var price = $("#price" + btnId).val();
  var image = $("#image" + btnId)[0].files[0];
  var status = $("#status" + btnId).val();
  var categoria = $("#categoria" + btnId).val();

  var dadosFormPut = new FormData();
  dadosFormPut.append("id", id);
  dadosFormPut.append("title", title);
  dadosFormPut.append("description", description);
  dadosFormPut.append("price", price);
  dadosFormPut.append("image", image);
  dadosFormPut.append("status", status);
  dadosFormPut.append("categoria", categoria);
  /* var dadosFormPut = new FormData(formEdit); */
  console.log(dadosFormPut);

  const dadosPuted = await fetch("../controller/itemCardapio/put.php", {
    method: "POST",
    body: dadosFormPut,
  });

  //Ler dados retornados do arquivo post.php
  const response = await dadosPuted.json();

  if (response["status"]) {
    listItensOnTable();
    setDisableInput("___" + response["id"]);
    alertaSweetAlert2("success", "Sucesso", "O item " + response["id"] + " foi atualizado com sucesso!");
  } else {
    alertaSweetAlert2("error", "Oops...", "Ouve um erro ao atualizar!");
  }

  if (response["msg"] == "img") {
    alertaSweetAlert2("error", "Oops...", "Houve um problema ao atualizar a imagem!");
  }
}
