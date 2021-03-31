function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO]')
    }
    else {
        res.innerHTML = 'Contando....'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo 0 inválido')
        }
        if (i < f){
            // Contagem crescente
        for (let c = i; c <= f ; c += p){
            res.innerHTML +=`${c} \u{270D} ` 
        }
    }
        else {
            // contagem decrescente
            for ( c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{270D}`
            }
            
        }
        }
    
    res.innerHTML += `\u{1F4AF}`
}
    