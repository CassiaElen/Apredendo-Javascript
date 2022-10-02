function contarNum() {
    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var result = document.getElementById('resultado')

    if(ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] faltam dados')
    } else{
        result.innerHTML ='contando:'
        var inicio = Number(ini.value)
        var fim = Number(fi.value)
        var passo = Number(pas.value)
        if(passo<=0){
            alert('Passo inválido! Vamos considerar PASSO 1')
            passo = 1
        }
        if(inicio < fim){
            for( var t = inicio ; t <= fim ; t+= passo){
                result.innerHTML += ` ${t} \u{2794}`
            }
        }else{
            for(var t = inicio ; t>= fim ; t -= passo){
                result.innerHTML += ` ${t} \u{2794}`
            }
        }
    }
}
         
