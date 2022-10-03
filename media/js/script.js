function calMedia() {
    var pNota = document.getElementById('num1')
    var sNota = document.getElementById('num2')
    var tNota = document.getElementById('num3')
    var qNota = document.getElementById('num4')

    var nota1 = Number(pNota.value)
    var nota2 = Number(sNota.value)
    var nota3 = Number(tNota.value)
    var nota4 = Number(qNota.value)

    var result = document.getElementById('resultado')
    var media = (nota1 + nota2 + nota3 + nota4)/4
   // alert('meidia:'+ media)
    result.innerHTML=` ${media}`
    
}