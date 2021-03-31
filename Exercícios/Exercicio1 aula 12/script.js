function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var putaria = window.document.getElementById('putaria')
var data = new Date()
//var hora = data.getHours()
var hora = window.prompt('Que horas são?')
msg.innerHTML = `agora são ${hora} horas. `
if (hora >= 0 && hora < 12){
// bom dia
document.body.style.background = '#F29863'
msg.innerHTML = `Agora são ${hora}, poderiamos estar acordando e fodendo de ladinho embaixo do lençol`

}
else if(hora >= 12 && hora < 18){
// boa tarde 
img.src = 'tarde250.png'
document.body.style.background = '#465902'
msg.innerHTML = `agora são ${hora} horas e ta chovendo na ilha, pega um uber e vem pra cá alagar essa pepeca comigo`
putaria.innerHTML = 'Que tesão'
}
// boa noite 
else {
img.src = 'night250.png'
document.body.style.background = '#010626'
msg.innerHTML = `agora são ${hora} horas, não da tempo de voltar pra casa , infelizmente teremos que passar a noite vendo a saga harry potter e se excitando durante o filme, olha que coisa chata!`
}
}
