let num = document.querySelector('input#fnum')
let lista = document.querySelector('input#flista')
let res = document.querySelector('div#res')
let img = document.getElementById('img')
let valores = []
let foto = document.getElementById('foto')
let comeco = document.getElementById('comeco')

function safada(){
    if (num.value == 0) {
        alert('Ah qual foi, não vamos dar nem umazinha ?')
        
        foto.src = 'questionando1.png'
        document.body.style.background = 'red'
        comeco.innerHTML = 'Que decepção'
    } else {
        if (num.value < 5 ){
            comeco.innerHTML = ' Agora estamos começando a conversar'
            foto.src = 'sorrindo.jpg'
        }
         else if( num.value < 13  ){
            comeco.innerHTML = ' Que isso Giulia, assim eu fico com aquele olhar de quando voce me chama de João Dias'
            foto.src = 'olharsedu.png'

         
        }
        else   {  
            comeco.innerHTML = ' Ain eu vou morrer de Gozar'
            foto.src = 'Gozando1.png'
          
        }

    }
}