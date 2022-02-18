
function clicado()

{
    console.log("clicado")
}

// popap
function alerta(mensagem)
{
window.alert("essa mensagem vem do "+ mensagem)

}

function toggle(btnIndexador)
 {
    console.log("entroou na funçao")

    var elements = document.querySelectorAll(".btn")

    console.log(elements)
    // For
    console.log("O length é " + elements.length )
    for (let index = 0; index < elements.length; index++)
    {
        const element = elements[index];
        if(element.classList.contains("ativo"))
        {
            element.classList.toggle("ativo")
            console.log("Tirou o ativo")
        }

        if(btnIndexador == index)
        {
            element.classList.toggle("ativo")
        }

    }


   var soma = Soma(3,4)
}

function Soma(a, b)
{
    return a + b;
}

function Subtracao(a, b)
{
return a -b;
}


let preço = 19.90;
let desconto = 0.4 ;

console.log( preço * (1- desconto) )

 // ulltilizado para saber o tipo//
console.log(typeof preço)   

// caulculo da circunferencia //

const PI = 3.14;

let raio = 10;

circunferencia = PI *raio  * raio + " m2"

console.log(circunferencia)

// trocar os valores das variaveis //

let a = 7 
let b = 94


let c = a

a=b
b=c

console.log(a)
console.log(b)


