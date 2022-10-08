function gerarTabu() {
    var numero = document.getElementById('numero')
        var num = Number(numero.value)
        var result = document.getElementById('resultado')
        result.innerHTML=''
        for(var i = 1 ; i <= 10 ; i++  ){
            var resso = num * i;
           result.innerHTML +=(`${num} x ${i} = ${resso}<br>`)
        }
}
