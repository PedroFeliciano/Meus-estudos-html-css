
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