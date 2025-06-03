let selectQuantidadeNota = document.querySelector("select#selectQuantidadeNota") ;
selectQuantidadeNota.addEventListener('change' , alterarQuantidadeNota);


// --- { GRAVAR CONFIGURAÇÕES DE NOTAS }
function alterarQuantidadeNota() {
    
    let entradaTodasNotas = [entradaN1 , entradaN2 , entradaN3] ;
    let quantidadeSelecionada  = parseInt(selectQuantidadeNota.value);

    entradaTodasNotas.forEach((input, index) => {
            // O índice é 0-based, então para N1 (index 0), N2 (index 1), N3 (index 2)
            // Se o índice + 1 (que representa o número da nota) for maior que a quantidade selecionada, desabilita.
        if (index + 1 > quantidadeSelecionada) {
            input.disabled = true;
               input.value = ''; // Limpa o valor do input desabilitado
        } else {
            input.disabled = false;
        }
        });
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
        let media = (N1 + N2 + N3) /3
        resultado.innerHTML = `Média = ${media} `
    }

}

