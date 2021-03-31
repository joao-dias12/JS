function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados ')
    }
    else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10) {
               // Criança
               img.setAttribute('src','manhã(1).png')
           }
           else if(idade < 20){
               // adolescente
               img.setAttribute('src','manhã(2).png')
           }
           else if(idade < 55){
               // Adulto

           }
           else {
               // Idoso
           }
           
           
       }
       else if (fsex[1].checked) {
           genero = 'Mulher'
           if(idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src','manhã-3.png')
        }
        else if(idade < 20){
            // adolescente
            img.setAttribute('src','manhã-6.png')
        }
        else if(idade < 55){
            // Adulto

        }
        else {
            // Idoso
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
       res.appendChild(img)
    }
}