let btn = document.getElementById("btn")

btn.addEventListener('click', function(){

    let nome = prompt('Qual é seu nome?')

    let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`)

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
})