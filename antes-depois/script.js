function antesdepois(){

    var x;
    var r;

    var numero=prompt("Digite um número inteiro")
    numero= parseFloat(numero)
    x = numero-1 + "->" + "seu ANTECESSOR";
    document.getElementById("num").innerHTML=x
    r = numero +1 + "->" + "seu SUCESSOR";
    document.getElementById("num2").innerHTML=r
}