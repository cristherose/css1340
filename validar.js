const fname = document.getElementById("fname")
const email = document.getElementById("email")
const assuntos = document.getElementById("assuntos")
const form = document.getElementById ("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    
    if(fname.value.length<6){
      
        warnings+= `o nome não é valido <br>`

    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings+= `o email não é valido <br>`
        entrar= true
    }

    if(assuntos.value.length<8){
      
        warnings+= `o assunto não é valido <br>`
        entrar= true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }
    
})