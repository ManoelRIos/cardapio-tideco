
function setEditableInput(id){
  id = id.replace("btn_edit", "");
  $("#title" + id).attr("readonly", false);
  $("#description" + id).attr("readonly", false);
  $("#price" + id).attr("readonly", false);
  $("#categoria" + id).attr("readonly", false);
}

function setDisableInput(id){
  $("#title" + id).attr("readonly", true);
  $("#description" + id).attr("readonly", true);
  $("#price" + id).attr("readonly", true);
  $("#categoria" + id).attr("readonly", true);
}

function alertaSweetAlert2(icon, title, msgHTML) {
  Swal.fire({
    icon: icon,
    title: title,
    html: msgHTML,
  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

console.log('../public/assets/imgs/14935ccde3fb9dffbd3a97fd0648798e.png')