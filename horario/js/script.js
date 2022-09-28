function carregarImgMsg(){
    var mensagem = document.getElementById('mensagem')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 0 && hora <12) {
        img.src = 'img/manha.jpg' 
        document.body.style.background =' #387011' 
    } else if(hora >=12 && hora <18) {
        img.src ='img/tarde.jpg'
        document.body.style.background ='#7795bb'
    } else{
        img.src ='img/noite.jpg'
        document.body.style.background ='#385274'
    }
}