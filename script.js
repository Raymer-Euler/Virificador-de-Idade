function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var foano = window.document.getElementById("txtano")
    var fano = Number(foano.value)
    var res = window.document.getElementById("res")
    if(fano == 0 || fano>ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsexo")
        var idade = ano - fano
        var genero = ''
        var img = window.document.createElement("img")
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade<10){
                //Criança
                img.setAttribute('src', 'criança-mas.jpg')
            } else if(idade<21){
                //Jovem
                img.setAttribute('src','jovem-mas.jpg' )
            } else if(idade<35){
                //Jovem Adulto
                img.setAttribute('src','jovem-adulto-mas.jpg' )
            }else if (idade<60){
                //Adulto 
                img.setAttribute('src','adulto-mas.jpg' )
            } else {
                //Idoso
                img.setAttribute('src','velho-mas.jpg' )
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if(idade<10){
                //Criança
                img.setAttribute('src','criança-fem.jpg' )
            } else if(idade<21){
                //Jovem
                img.setAttribute('src','jovem-fem.jpg' )
            } else if (idade<35){
                //Jovem Adulto
                img.setAttribute('src','jovem-adulto-fem.jpg' )
            } else if (idade<60){
                //Adulto
                img.setAttribute('src','adulto-fem.jpg' )
            } else {
                //Idoso
                img.setAttribute('src','velho-fem.jpg' )
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild (img)

        
       
        
        
    }
}