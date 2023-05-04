async function listItensOnTable() {
  const tbody = $("tbody");
  tbody.html("");
  var itens = await getAllItens();
  itens.forEach((item) => {
    tbody.append(
      `
      <tr>
        <td scope='row' id='id___${item.id}'>${item.id}</td>
        <td>
          <div class='form-group'>
            <input type='text' class='form-control' id='title___${item.id}' name="title___${item.id}" value='${item.title}' readonly>
          </div>
        </td>
        <td>
          <div class='form-group'>
            <input type='text' class='form-control' id='description___${item.id}' name="description___${item.id}" value='${item.description}' readonly>
          </div>
        </td>
        <td class='col-md-1'>
        <div class='form-group'>
        <input type='number' class='form-control' id='price___${item.id}' value='${item.price}' readonly>
      </div>
        </td>
        <td>
        <div class='btn-group col-md-12'>
          <a href='../public/assets/imgs/${item.image}' target='_blank' class='btn btn-info'><i class='fa-regular fa-eye' style='color: #ffffff;'></i></a>
           <input type="file" class="form-control btn btn-default" type="image/*" id="image___${item.id}" required  name="image___${item.id}">
        </div>
          </td>
          <td>
            <div class='form-group'>
              <input type='text' class='form-control' id='categoria___${item.id}' value='${item.categoria}' readonly>
            </div>
        </td>
        <td>
          <select class='form-select' aria-label='Default select example' id='status___${item.id}' name='status___${item.id}' value='${item.status}'>
            <option value='1'>Ativo</option>
            <option value='0'>Inativo</option>
          </select>
        </td>
        <td>
          <div class='btn-group'>
            <button type='button' onclick='setEditableInput(this.id)' id='btn_edit___${item.id}' class='btn btn-warning'><i class='fa-regular fa-pen-to-square' style='color: #ffffff;'></i></button>        
            <button type='submit' onclick="putItemCardapio(this.id)" class='btn btn-primary'  id='btn_save___${item.id}'><i class='fa-regular fa-floppy-disk'></i></button>
            <button type='button' onclick='deleteItemCardapio(this.id)' id='btn_delete___${item.id}' class='btn btn-danger'><i class='fa-solid fa-trash' style='color: #ffffff;'></i></button>
          </div>
        </td>
      </tr>`
    );
    $(`#status___${item.id}`).val(item.status)
  });
}

async function listCategories() {
  const categoriasDiv = $(".categorias");
  categoriasDiv.html("");
  var itens = await getAllItens();
  var categorias = [];
  itens.forEach((item) => {
    categorias.push(item.categoria);    
  });
  categorias = [...new Set(categorias)]
  categorias.forEach((cat)=> {
    categoriasDiv.append(`
    <div class="card-cat" id="categoria___${cat}" onclick="filterByCat(this.id)">
      <span class="material-symbols-outlined">
        lunch_dining
      </span>
      <p>${cat}</p>
    </div>
    `);
  })
}

async function listCardapio() {
  const cardapio = $(".cardapio");
  cardapio.html("");
  var itens = await getAllItens();
  itens = itens.filter(item => item.status == 1)
  itens.forEach((item) => {
    cardapio.append(`
    <a class="card" style="width: 18rem;" id="${item.id}">
        <img class="card-img-top" src="../public/assets/imgs/${item.image}">
        <div class="card-body">
          <h5 class="card-title">${item.title}
            <span>R$ ${item.price}</span>
          </h5>
          <p class="card-text">${item.description}</p>
        </div>
      </a>`);
  });
}

async function filterByCat(id){
  var cat = id.replace("categoria___", "")
  const cardapio = $(".cardapio");
  cardapio.html("");
  var itens = await getAllItens();
  itens = itens.filter(item => item.categoria == cat);
  itens.forEach((item) => {
    cardapio.append(`
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../public/assets/imgs/${item.image}">
        <div class="card-body">
          <h5 class="card-title">${item.title}
            <span>R$ ${item.price}</span>
          </h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>`);
  });

}

//Lista itens no cardapio
listCardapio();
//Lista categorias do cardapio
listCategories()
//Lista itens na table
listItensOnTable();
