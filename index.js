
var aprovado = "Parabéns você passou! "
var reprovado = "Que pena, você foi reprovado. "

let n1 = parseInt(prompt("Digite sua primeira nota: "))
let n2 = parseInt(prompt("Digite sua segunda nota: "))
let n3 = parseInt(prompt("Digite sua terceira nota: "))
let n4 = parseInt(prompt("Digite sua última nota: "))
let notaFinal = (n1 + n2 + n3 + n4) /4
let media = notaFinal.toFixed(1)
var nota = document.querySelector(".page-subtitle")

if ( media >= 6 ){
  alert(aprovado + "sua média é: " + media)
  nota.innerHTML = "Parabéns você passou! Sua média é: " + media
  document.body.style.backgroundColor = "green"
  document.querySelector(".page-logo").setAttribute("src", "https://cdn-icons-png.flaticon.com/128/1710/1710008.png")
  
}else{
  alert(reprovado + "sua média é: "+ media)
  nota.innerHTML = "Que pena você reprovou. \nSua média é: " + media
  document.body.style.backgroundColor = "red"
  document.querySelector(".page-logo").setAttribute("src", "https://icon-library.com/images/no-icon-png/no-icon-png-12.jpg")

}

