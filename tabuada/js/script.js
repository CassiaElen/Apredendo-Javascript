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
/*var num = 3
for(var i = 1 ; i <= 10 ; i++  ){
    var resso = num * i;
   console.log(`${num} x ${i} = ${resso}`)
}*/