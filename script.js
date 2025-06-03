let selectQuantidadeNota = document.querySelector("select#selectQuantidadeNota") ;
selectQuantidadeNota.addEventListener('onchange' , alterarQuantidadeNota);


// --- { GRAVAR CONFIGURAÇÕES DE NOTAS }
function alterarQuantidadeNota() {
    resultado.innerHTML = ` Tudo OK `

}

// --- { SALVAR NOTAS }
let botaoSalvarNotas = document.querySelector('input#botaoSalvarNotas')
botaoSalvarNotas.addEventListener('click' , salvarNotas)

function salvarNotas(){
    let entradaN1 = document.querySelector('input#entradaN1') ;
    let entradaN2 = document.querySelector('input#entradaN2') ;
    let entradaN3 = document.querySelector('input#entradaN3') ;
    let N1 = Number(entradaN1.value) ;
    let N2 = Number(entradaN2.value) ;
    let N3 = Number(entradaN3.value) ;
    
    let resultado = document.querySelector('div#resultado') ;

    if (N1 == ' '|| N2 == ' ' || N3 == ' ') {
        window.alert (` [ ERRO ] Preencha todos os campos `)
    } else {
        let soma = (N1 + N2 + N3) /3
        resultado.innerHTML = `Nota = ${soma} `
    }

    
    

}

