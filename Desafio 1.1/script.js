
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


var img1 = "'https://images.pexels.com/photos/7646486/pexels-photo-7646486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
var img2 ="https://images.pexels.com/photos/5560376/pexels-photo-5560376.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
var img3 = "https://images.pexels.com/photos/5560210/pexels-photo-5560210.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
var listaImg = [img1,img2,img3]

let counter = 0;
function interval()
{
    setInterval(function()
    {
        var divImgContent = document.querySelector(".img-content")
        console.log("changed")
        divImgContent.style.background =  `linear-gradient(rgba(0,0,0,.5) ,rgba(0,0,0,.5)), url('${listaImg[counter]}')`
        divImgContent.style.backgroundSize = "cover"

        counter = counter + 1;
        if(counter >2)
        {
            counter= 0 
        } 
 console.log(counter)
},4000)
}

// trocar os valores das variaveis //

let a = 7 
let b = 94


let c = a

a=b
b=c

console.log(a)
console.log(b)


