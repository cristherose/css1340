function check_form(){
    var input = document.getElementsByClassName('required');
  var len = input.length;
  var valid = true;
  for(var i=0; i < len; i++){
     if (!input[i].value){ valid = false; }
  }
  if (!valid){
    alert('Por favor preencha todos os campos.');
    return false;
  } else { return true; }
}






/*function Enviar(){
    const idForm = document.getElementById(id).getAttribute('id');
    document.querySelectorAll('#' + idForm + ' input').forEach(function(a){
        if(a.value.length < 1 && a.hasAttribute('required')) {
            console.log('Por favor, preencha todos os campos!');
        }
    });
  }*/

/*function Enviar() {

    var fname = document.getElementById("fname");

    if (fname.value != "") {
        alert('Obrigado sr(a) ' + fname.value + ' os seus dados foram encaminhados com sucesso');
    }else{
        alert("Nome não inserido")

    }
}*/