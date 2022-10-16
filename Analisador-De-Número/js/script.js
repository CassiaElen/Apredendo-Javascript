let num = document.getElementById('num')
let lista = document.getElementById('lista')
let result = document.getElementById('result')
let valores =[]



function naNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }
}

function naLista(n, i) {
    if(i.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(naNumero(num.value) && !naLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       result.innerHTML =''
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let totalEle = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let analis in valores){
            soma += valores[analis]
            if(valores[analis] > maior)
                maior = valores[analis]
            if(valores[analis] < menor)
                menor == valores[analis]
        }
        media = soma / totalEle
        result.innerHTML =''
        result.innerHTML += `<p>Temos ${totalEle} números adicionados</p>` 
        result.innerHTML += `<p>O maior número foi ${maior}</p>`
        result.innerHTML += `<p>O menor número foi ${menor}</p>`
        result.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        result.innerHTML += `<p>A média dos valores foi ${media.toFixed(2)}</p>`    
    }
}