function numeroVizinho() {
    var num = window.document.getElementById('numero')
    var numero=Number(num.value)
    var numAnterior = numero - 1
    var numPosterior = numero + 1
    var resultado = window.document.getElementById('resultado')
    resultado.innerHTML = `O número anterior de ${numero} é ${numAnterior} e o posterior é ${numPosterior}`
  // resultado.innerHTML = ('o num aterior de'+numero+'é'+ --numero); 
}