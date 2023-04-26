const tbody = $('tbody');

//Get ALl Itens Cardapio
const getAllItens = async () => {
  const dados = await fetch("../controller/itemCardapio/list.php")
  const response = await dados.text();
  tbody.append(response)
}

getAllItens();

//Post Item Do Cardapio
const itemCardForm = $("#formItemCardapio");
if(itemCardForm){
  itemCardForm.on("submit", async (e) =>{
    e.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var file = $("#image")[0].files[0];
    var status = $("#status").val();

    var dadosForm = new FormData();

    dadosForm.append("title", title);
    dadosForm.append("description", description);
    dadosForm.append("price", price);
    dadosForm.append("file", file);
    dadosForm.append("status", status);

    const dadosPosted = await fetch("../controller/itemCardapio/post.php", {
      method: "POST",
      body: dadosForm
    })

    //Ler dados retornados do arquivo post.php
    const response = await dadosPosted.json()
    console.log(response); 

    if(response['status']){//retorna true or false
      //msg -> response['msg] -> success
    }else {
      //msg -> response['msg] -> erro
    }

    //Validar caso diferente de imagem
    if(file['type'] !== '.png'){
      //error
    }
  });
}
